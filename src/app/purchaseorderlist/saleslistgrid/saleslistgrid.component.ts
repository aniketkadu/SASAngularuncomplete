import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddEvent, EditEvent, GridComponent } from '@progress/kendo-angular-grid';
import { products, sampleProducts } from "./products";
import { Observable } from 'rxjs/Rx';
import { Validators, FormBuilder } from '@angular/forms';
import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';


@Component({
  selector: 'app-saleslistgrid',
  templateUrl: './saleslistgrid.component.html',
  styleUrls: ['./saleslistgrid.component.css']
})
export class SalesListgridComponent
{
private gridView: GridDataResult;
    private data: Object[];
    private pageSize: number = 10;
    private skip: number = 0;

    private items: any[] = products; 
    constructor() {
        this.loadItems();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }

      private state: State = {
        skip: 0,
        take: 5
    };

    private gridData: GridDataResult = process(sampleProducts, this.state);

    protected dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(sampleProducts, this.state);
    }


}


