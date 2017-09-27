import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";



import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { SalesOrderListRoutingModule } from "app/salesorderlist/salesorderlist-routing.module";
import { SalesOrderListComponent } from "app/salesorderlist/component/salesorderlist.component";

import { GridModule } from '@progress/kendo-angular-grid';
import { SalesListgridComponent } from "app/salesorderlist/saleslistgrid/saleslistgrid.component";
import { SalesOrderformComponent } from "app/salesorderlist/component/salesorderform/salesorderform.component";


@NgModule({
    imports: [
        CommonModule,
      
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
        SalesOrderListRoutingModule,
        FormsModule,
        GridModule,
      
       
        
    ],
    declarations: [
SalesOrderListComponent ,
       SalesListgridComponent,
       SalesOrderformComponent
        
    ],
    providers: []
})
export class SalesOrderListModule {

}