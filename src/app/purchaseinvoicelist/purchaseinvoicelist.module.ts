import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";

import { GridModule } from '@progress/kendo-angular-grid';
import { PurchaseInvoiceListRoutingModule } from "app/purchaseinvoicelist/purchaseinvoicelist-routing.module";
import { PurchaseInvoiceListComponent } from "app/purchaseinvoicelist/component/purchaseinvoicelist.component";
import { SalesListgridComponent } from "app/purchaseinvoicelist/saleslistgrid/saleslistgrid.component";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
        PurchaseInvoiceListRoutingModule,
        FormsModule,
        GridModule,
        
    ],
    declarations: [
    PurchaseInvoiceListComponent ,
       SalesListgridComponent,
        
    ],
    providers: []
})
export class PurchaseInvoiceListModule {

}