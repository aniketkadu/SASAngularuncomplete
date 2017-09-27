import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SalesOrderListComponent } from "app/salesorderlist/component/salesorderlist.component";
import { OptionComponent } from "app/option/component/option.component";



const routes: Routes = [
    {
        path: '',
        component:OptionComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class OptionRoutingModule {

}