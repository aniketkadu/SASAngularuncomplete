import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyDetailsComponent } from "app/companydetails/component/companydetails.component";



const routes: Routes = [
    {
        path: '',
        component:CompanyDetailsComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class CompanyDetailsRoutingModule {

}