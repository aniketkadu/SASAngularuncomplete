import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";



import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { CompanyDetailsRoutingModule } from "app/companydetails/companydetails-routing.module";
import { CompanyDetailsComponent } from "app/companydetails/component/companydetails.component";

@NgModule({
    imports: [
        CommonModule,
      
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
     CompanyDetailsRoutingModule,
        FormsModule
        
    ],
    declarations: [ CompanyDetailsComponent 

       
    ],
    providers: []
})
export class CompanyDetailsModule {

}