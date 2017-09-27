import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
   templateUrl:`./salesorderlist.component.html`,
   styleUrls:[`./salesorderlist.component.css`]
   
})
export class SalesOrderListComponent {

 constructor(private router: Router){}

 gotosalesorderform() {
        this.router.navigate(['/salesorderlist/salesorder-form']);
    }


}