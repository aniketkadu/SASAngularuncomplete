import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SalesOrderListComponent } from "app/salesorderlist/component/salesorderlist.component";
import { SalesOrderformComponent } from "app/salesorderlist/component/salesorderform/salesorderform.component";


const routes: Routes = [
    {
        path: '',
        component:SalesOrderListComponent,
         children: [
             { path: '', component: SalesOrderListComponent },
            { path: 'salesorder-form', component: SalesOrderformComponent }
        ]
    },
  

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class SalesOrderListRoutingModule {

}