import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchaseOrderListComponent } from "app/purchaseorderlist/component/purchaseorderlist.component";



const routes: Routes = [
    {
        path: '',
        component:PurchaseOrderListComponent,
        
    },
  

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class PurchaseOrderListRoutingModule {

}