
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "app/login/login-routing.module";
import { LoginComponent } from "app/login/component/login.component";
import { HttpModule } from "@angular/http";


@NgModule({
    imports: [CommonModule,
     LoginRoutingModule,
     HttpModule,
    FormsModule,
     ReactiveFormsModule],
    
    declarations: [LoginComponent],
    
    providers: [ ]
})
export class LoginModule {

}


