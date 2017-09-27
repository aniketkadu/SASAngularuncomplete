import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { PageNotFountComponent } from "app/pagenotfound.component";
import { AuthGuard } from "app/core/guards/auth.guard";
import { AuthService } from "app/core/services/auth.service";
import { RouterModule } from "@angular/router";
import { LoginModule } from "app/login/login.module";
import { GridModule } from '@progress/kendo-angular-grid';
import { ConfigService } from "app/core/config/app.config";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    FormsModule,
      ReactiveFormsModule,
    GridModule  

  ],
  providers: [
    AuthGuard,
    AuthService,
   ConfigService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
