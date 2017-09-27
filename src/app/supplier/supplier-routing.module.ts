import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupplierComponent } from "app/supplier/component/supplier.component";



const routes: Routes = [
    {
        path: '',
        component:SupplierComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class SupplierRoutingModule {

}