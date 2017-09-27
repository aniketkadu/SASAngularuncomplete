import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "app/layout/layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'companydetails',
                loadChildren: '../companydetails/companydetails.module#CompanyDetailsModule'
            },

            {
                path: 'customerdetails',
                loadChildren: '../customerdetails/customer-details.module#CustomerDetailsModule'
            },

            {
                path: 'salesorderlist',
                loadChildren: '../salesorderlist/salesorderlist.module#SalesOrderListModule'
            },
            
            {
                path: 'option',
                loadChildren: '../option/option.module#OptionModule'
            },
            {
                path: 'supplier',
                loadChildren: '../supplier/supplier.module#SupplierModule'
            },
            {
                path: 'salesinvoicelist',
                loadChildren: '../salesinvoicelist/salesinvoicelist.module#SalesInvoiceListModule'
            },
             {
                path: 'purchaseorderlist',
                loadChildren: '../purchaseorderlist/purchaseorderlist.module#PurchaseOrderListModule'
            },
            {
                path: 'purchaseinvoicelist',
                loadChildren: '../purchaseinvoicelist/purchaseinvoicelist.module#PurchaseInvoiceListModule'
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}