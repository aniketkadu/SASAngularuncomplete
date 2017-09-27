import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchaseInvoiceListComponent } from "app/purchaseinvoicelist/component/purchaseinvoicelist.component";



const routes: Routes = [
    {
        path: '',
        component:PurchaseInvoiceListComponent,
        
    },
  

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class PurchaseInvoiceListRoutingModule {

}