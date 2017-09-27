import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";

import { GridModule } from '@progress/kendo-angular-grid';
import { PurchaseOrderListRoutingModule } from "app/purchaseorderlist/purchaseorderlist-routing.module";
import { PurchaseOrderListComponent } from "app/purchaseorderlist/component/purchaseorderlist.component";
import { SalesListgridComponent } from "app/purchaseorderlist/saleslistgrid/saleslistgrid.component";


@NgModule({
    imports: [
        CommonModule,
      
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
        PurchaseOrderListRoutingModule,
        FormsModule,
        GridModule,
      
       
        
    ],
    declarations: [
PurchaseOrderListComponent ,
       SalesListgridComponent,
        
    ],
    providers: []
})
export class PurchaseOrderListModule {

}