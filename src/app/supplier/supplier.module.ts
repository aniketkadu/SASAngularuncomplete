import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";



import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { SupplierRoutingModule } from "app/supplier/supplier-routing.module";
import { SupplierComponent } from "app/supplier/component/supplier.component";

@NgModule({
    imports: [
        CommonModule,
      
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
   SupplierRoutingModule,
        FormsModule
        
    ],
    declarations: [ SupplierComponent 

       
    ],
    providers: []
})
export class SupplierModule {

}