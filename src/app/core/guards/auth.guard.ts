import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "app/core/services/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
    
    // constructor(private authService: AuthService, private router: Router) { }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //     let url: string = state.url;

    //     return this.checkLogin(url);
    // }

    // checkLogin(url: string): boolean {
    //     if (this.authService.isLoggedIn) { return true; }

    //     // Store the attempted URL for redirecting
    //     this.authService.redirectUrl = url;
            
    //     // Navigate to the login page with extras
    //   this.router.navigate(['/login']);
      
    // }

 constructor(private router: Router,private authService: AuthService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }




}
