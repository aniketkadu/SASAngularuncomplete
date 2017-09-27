import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "app/dashboard/components/dashboard.component";

const routes: Routes = [
   {
        path: '',
        component:DashboardComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}