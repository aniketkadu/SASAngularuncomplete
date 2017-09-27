import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { GridModule } from '@progress/kendo-angular-grid';
import { SalesInvoiceListRoutingModule } from "app/salesinvoicelist/salesinvoicelist-routing.module";
import { SalesInvoiceListComponent } from "app/salesinvoicelist/component/salesinvoicelist.component";
import { SalesListgridComponent } from "app/salesinvoicelist/saleslistgrid/saleslistgrid.component";


@NgModule({
    imports: [
        CommonModule,
      
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
        SalesInvoiceListRoutingModule,
        FormsModule,
        GridModule,
      
       
        
    ],
    declarations: [
SalesInvoiceListComponent ,
       SalesListgridComponent,
        
    ],
    providers: []
})
export class SalesInvoiceListModule {

}