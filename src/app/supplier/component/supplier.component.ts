import {NgModule, Component,Pipe, OnInit} from '@angular/core';
import { ReactiveFormsModule,
       FormsModule,
       Validators,
       FormBuilder,
       NgForm, 
       FormGroup,
       FormControl } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
   templateUrl:`./supplier.component.html`,
   styleUrls:[`./supplier.component.css`]
   
})
export class SupplierComponent {

// toastr: any;
     
//here we applying validation for form element
      myform=new FormGroup({
   
   SupplierName:new FormControl('',[Validators.required,Validators.maxLength(50)]),
   
  SupplierCompanyRegno: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]$/)]),

  SupplierTelephone:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]),

 SupplierEmail :new FormControl('',[Validators.required,Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]),

 SupplierBalanceAmt :new FormControl('',[Validators.required,Validators.pattern(/^[0-9]$/)]),

 SupplierFax:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]$/)]),

SupplierContactPerson:new FormControl('',[Validators.required]),

 SupplierBilltoLine1:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  SupplierBilltoLine2:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  SupplierBilltoCity:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  SupplierBilltoState:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  SupplierBilltoCountry:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  SupplierBilltoPostalCode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

  SupplierShiptoLine1:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  SupplierShiptoLine2:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  SupplierShiptoCity:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  SupplierShiptoState:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  SupplierShiptoCountry:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  SupplierShiptoPostalCode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

});

// get SupplierName()
// {
// return this.myform.get("SupplierName");

// }
get SupplierCompanyRegno(){
return this.myform.get("SupplierCompanyRegno");

}
get SupplierBalanceAmt(){
return this.myform.get("SupplierBalanceAmt");

}
get SupplierTelephone(){
return this.myform.get("SupplierTelephone");

}
get SupplierFax(){
return this.myform.get("SupplierFax");

}
get SupplierEmail(){
return this.myform.get("SupplierEmail");

}
get SupplierContactPerson(){
   return this.myform.get("SupplierContactPerson");

}
get SupplierBilltoLine1(){
   return this.myform.get("SupplierBilltoLine1");

}
get SupplierBilltoLine2(){
   return this.myform.get("SupplierBilltoLine2");

}
get SupplierBilltoCity(){
   return this.myform.get("SupplierBilltoCity");

}
get SupplierBilltoState(){
   return this.myform.get("SupplierBilltoState");

}
get SupplierBilltoCountry(){
   return this.myform.get("SupplierBilltoCountry");

}
get SupplierBilltoPostalCode(){
   return this.myform.get("SupplierBilltoPostalCode");

}
get SupplierShiptoLine1(){
   return this.myform.get("SupplierShiptoLine1");
}

get SupplierShiptoLine2(){
   return this.myform.get("SupplierShiptoLine2");

}
get SupplierShiptoCity(){
   return this.myform.get("SupplierShiptoCity");

}
get SupplierShiptoState(){
   return this.myform.get("SupplierShiptoState");

}
get SupplierShiptoCountry(){
   return this.myform.get("SupplierShiptoCountry");

}
get SupplierShiptoPostalCode(){
   return this.myform.get("SupplierShiptoPostalCode");

}
  

    
  }

















