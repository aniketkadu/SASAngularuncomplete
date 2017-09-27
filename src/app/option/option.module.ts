import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";



import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { OptionRoutingModule } from "app/option/option-routing.module";
import { OptionComponent } from "app/option/component/option.component";



@NgModule({
    imports: [
        CommonModule,
      
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
        OptionRoutingModule,
        FormsModule
        
    ],
    declarations: [  
OptionComponent
       
    ],
    providers: []
})
export class OptionModule {

}