import { NgModule } from "@angular/core";


import { DashboardRoutingModule } from "app/dashboard/dashboard-routing.module";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "app/dashboard/components/dashboard.component";

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [DashboardComponent],
    providers: []
})
export class DashboardModule {

}