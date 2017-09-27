import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { ConfigService } from "app/core/config/app.config";


@Injectable()
export class AuthService {
    redirectUrl: string;
  isLoggedIn = false; 
  token: string;
//public url:'http://localhost:10958/api/AccountingLogin'
    constructor(private http: Http, private config: ConfigService) { 
         this.token = localStorage.getItem('token');
     }
   
//     login(): Observable<boolean> {
        
    
       
//        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
       
// }

   login(username: string, password: string) {
        return this.http.post(this.config._apiURI + '/login', { UserName: username, Password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
             localStorage.setItem('user', JSON.stringify(user));
                
            });
    }
   
   
   
   
    // logout(): void {
   
    //  this.isLoggedIn = false;


    // }


  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    }



}
