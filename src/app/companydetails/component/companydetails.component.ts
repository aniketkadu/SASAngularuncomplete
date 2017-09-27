
import {NgModule, Component,Pipe, OnInit} from '@angular/core';
import {ReactiveFormsModule,
     FormsModule, 
     Validators, 
     FormBuilder,
     NgForm, 
    FormGroup,
     FormControl } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';




@Component({
   templateUrl:`./companydetails.component.html`,
   styleUrls:[`./companydetails.component.css`]
   
})
export class CompanyDetailsComponent {


      public alerts: Array<any> = [];
       public sliders: Array<any> = [];
       posts:any[];
       companyName:any;
      submitted: boolean;

myform=new FormGroup({
   
  CompanyName:new FormControl('',[Validators.required,Validators.minLength(5)]),
   
  CompanyRegno: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

  CompanyTelephone:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]),

  CompanyEmail:new FormControl('',[Validators.required,Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]),

  FinancialYrStartDate:new FormControl('',[Validators.required]),

  FinancialYrEndDate:new FormControl('',[Validators.required]),

  BilltoLine1:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  BilltoLine2:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  BilltoCity:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  BilltoState:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  BilltoCountry:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  BilltoPostalCode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

  ShiptoLine1:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  ShiptoLine2:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  ShiptoCity:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  ShiptoState:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  ShiptoCountry:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  ShiptoPostalCode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

});

 onSubmit() {

this.submitted=true;
    }

get CompanyName()
{
return this.myform.get("CompanyName");

}
get CompanyRegno(){
return this.myform.get("CompanyRegno");

}
get CompanyTelephone(){
return this.myform.get("CompanyTelephone");

}
get CompanyEmail(){
return this.myform.get("CompanyTelephone");

}
get FinancialYrStartDate(){
return this.myform.get("CompanyTelephone");

}
get FinancialYrEndDate(){
   return this.myform.get("CompanyTelephone");

}
get BilltoLine1(){
   return this.myform.get("CompanyTelephone");

}
get BilltoLine2(){
   return this.myform.get("CompanyTelephone");

}
get BilltoCity(){
   return this.myform.get("CompanyTelephone");

}
get BilltoState(){
   return this.myform.get("CompanyTelephone");

}
get BilltoCountry(){
   return this.myform.get("CompanyTelephone");

}
get BilltoPostalCode(){
   return this.myform.get("CompanyTelephone");

}
get ShiptoLine1(){
   return this.myform.get("CompanyTelephone");

}
v
get ShiptoLine2(){
   return this.myform.get("CompanyTelephone");

}
get ShiptoCity(){
   return this.myform.get("CompanyTelephone");

}
get ShiptoState(){
   return this.myform.get("CompanyTelephone");

}
get ShiptoCountry(){
   return this.myform.get("CompanyTelephone");

}
get ShiptoPostalCode(){
   return this.myform.get("CompanyTelephone");

}




}
















