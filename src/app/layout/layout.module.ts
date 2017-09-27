import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "app/layout/layout-routing.module";
import { LayoutComponent } from "app/layout/layout.component";
import { HeaderComponent } from "app/layout/components/header/header.component";
import { SidebarComponent } from "app/layout/components/aside/aside.component";
import { RouterModule } from "@angular/router";

import { CustomerDetailsComponent } from "app/customerdetails/components/customer-details.component";
import { CustomerDetailsModule } from "app/customerdetails/customer-details.module";
import { CompanyDetailsModule } from "app/companydetails/companydetails.module";
import { SupplierModule } from "app/supplier/supplier.module";
import { SalesInvoiceListModule } from "app/salesinvoicelist/salesinvoicelist.module";
import { PurchaseOrderListModule } from "app/purchaseorderlist/purchaseorderlist.module";
import { PurchaseInvoiceListModule } from "app/purchaseinvoicelist/purchaseinvoicelist.module";
import { SalesOrderListModule } from "app/salesorderlist/salesorderlist.module";





@NgModule({
    imports: [CommonModule,RouterModule,  LayoutRoutingModule, CustomerDetailsModule,CompanyDetailsModule,
    SupplierModule,SalesInvoiceListModule,PurchaseOrderListModule,
    PurchaseInvoiceListModule,SalesOrderListModule
    ],
    declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
    providers: []
})
export class LayoutModule {

}