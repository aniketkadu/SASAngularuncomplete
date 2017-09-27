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
import { ToastrService } from "ngx-toastr";


@Component({
   templateUrl:`./customer-details.component.html`,
   styleUrls:[`./customer-details.component.css`]
   
})
export class CustomerDetailsComponent {

 accountingcustomer: any;
       customerdetails: FormGroup;
       public alerts: Array<any> = [];
       public sliders: Array<any> = [];
       posts:any[];
       companyName:any;
    //  public AccountingCustomer:AccountingCustomer ;
    // constructor(private toastr: ToastrService,private service: DataserviceService) {
    //     // this.createForm();
    // }

    myform=new FormGroup({
   
   CustomerName:new FormControl('',[Validators.required,Validators.minLength(2)]),
   
  CustomerCompanyRegno: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

  CustomerTelephone:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]),

 CustomerEmail :new FormControl('',[Validators.required,Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]),

  Salesman:new FormControl('',[Validators.required]),

 CustomerBalanceAmt :new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

  CustomerDiscount :new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

 CustomerFax:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

 CustomerType:new FormControl('',[Validators.required]),

CustomerContactPerson:new FormControl('',[Validators.required]),

 CustomerBilltoLine1:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  CustomerBilltoLine2:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  CustomerBilltoCity:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  CustomerBilltoState:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  CustomerBilltoCountry:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  CustomerBilltoPostalCode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

  CustomerShiptoLine1:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  CustomerShiptoLine2:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  CustomerShiptoCity:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  CustomerShiptoState:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  CustomerShiptoCountry:new FormControl('',[Validators.required,Validators.maxLength(20)]),

  CustomerShiptoPostalCode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]),

});


   


//       ngOnInit() {
//         // this.accountingcustomer = new AccountingCustomer( 1,"", true, 1101, 11,60, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
//         this.service.getData().subscribe((posts) =>
//          {           
//            console.log(posts);      
//             this.posts =posts;
//         }); 
//     }
    
//       createPost(input:HTMLInputElement){
//     var post= {CompanyName:input.value}; 
  
//     input.value='';
//     this.service.createPost(post)
//     .subscribe(response => {
//        post['Id'] = response.json().Id;
//       this.posts.splice(0,0,post);
//     }); 
//    }

//      public closeAlert(alert: any) {
//         const index: number = this.alerts.indexOf(alert);
//         this.alerts.splice(index, 1);
//     }

//       newcustomer() {
//   this.accountingcustomer = new AccountingCustomer( 1,"", true, 1101, 11, 60,"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
// }
    //   submitted = false;

    //   onSubmit() { this.submitted = true; }
   

 get CustomerName()
 {
 return this.myform.get("CustomerName");

}
get CustomerCompanyRegno(){
return this.myform.get("CustomerCompanyRegno");

}
get CustomerBalanceAmt(){
return this.myform.get("CustomerBalanceAmt");

}
get CustomerDiscount(){
return this.myform.get("CustomerBalanceAmt");

}
get CustomerType(){
return this.myform.get("CustomerType");

}
get Salesman(){
return this.myform.get("Salesman");

}
get CustomerEmail(){
   return this.myform.get("CustomerEmail");

}
get CustomerFax(){
   return this.myform.get("CustomerFax");

}
get CustomerTelephone(){
   return this.myform.get("CompanyTelephone");

}
get CustomerContactPerson(){
   return this.myform.get("CustomerContactPerson");

}
get CustomerBilltoLine1(){
   return this.myform.get("CustomerBilltoLine1");

}
get CustomerBilltoLine2(){
   return this.myform.get("CustomerBilltoLine2");

}
get CustomerBilltoCity(){
   return this.myform.get("CustomerBilltoCity");

}
get CustomerBilltoState(){
   return this.myform.get("CustomerBilltoState");

}
get CustomerBilltoCountry(){
   return this.myform.get("CustomerBilltoCountry");

}
get CustomerBilltoPostalCode(){
   return this.myform.get("CustomerBilltoPostalCode");

}
get CustomerShiptoLine1(){
   return this.myform.get("CustomerShiptoLine1");

}
v
get CustomerShiptoLine2(){
   return this.myform.get("CustomerShiptoLine2");

}
get CustomerShiptoCity(){
   return this.myform.get("CustomerShiptoCity");

}
get CustomerShiptoState(){
   return this.myform.get("CustomerShiptoState");

}
get CustomerShiptoCountry(){
   return this.myform.get("CustomerShiptoCountry");

}
get CustomerShiptoPostalCode(){
   return this.myform.get("CustomerShiptoPostalCode");

}


//   createform(model: AccountingCustomer, isValid) {
//         if (!isValid) {
//             this.toastr.error('Please fix errors');
//             //this.childModal.show();    
//         } else {
//             console.log(model)
//         }
//          }

    }


















