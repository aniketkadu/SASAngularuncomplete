
import { NgModule, Component, Pipe, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    Validators,
    FormBuilder,
    NgForm,
    FormGroup,
    FormControl
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AuthService } from "app/core/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Login } from "app/login/login";



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    // // message: string;
    //  complexForm:FormGroup;
    // Component: FormGroup;
    // public user: Login;

   myform: FormGroup;
   model: any = {};
    loading = false;
    returnUrl: string;

    constructor(public authService: AuthService, public router: Router,private route: ActivatedRoute) {
       

    

    this.myform = new FormGroup({

        username: new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]),

        password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/)]),
    });

    }
    // setMessage() {
    //     this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    // }

    get username() {
        return this.myform.get("username");

    }
    get password() {
        return this.myform.get("password");

    }
   


ngOnInit() {
        // reset login status
        this.authService.logout();
 
    }
   
    login(model:any) {
        this.loading = true;
        this.authService.login(model.username, model.password)
            .subscribe(
                data => {
                   
                    this.router.navigate(['/']);
                },
                error => {
                     alert('Incorrect username or password!');
                    this.loading = false;
                  
                });
    }



}

