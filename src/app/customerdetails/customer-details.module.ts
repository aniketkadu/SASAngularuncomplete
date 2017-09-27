import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { CustomerDetailsComponent } from "app/customerdetails/components/customer-details.component";
import { CustomerDetailsRoutingModule } from "app/customerdetails/customer-details-routing.module";

@NgModule({
    imports: [
        CommonModule,
      
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
        CustomerDetailsRoutingModule,
        FormsModule
        
    ],
    declarations: [ CustomerDetailsComponent 

       
    ],
    providers: []
})
export class CustomerDetailsModule {

}