import { Component, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";

@Component({
    selector:'salesorder-form',
  
   templateUrl:`./salesorderform.component.html`,
   styleUrls:[`./salesorderform.component.css`]
   
})
export class SalesOrderformComponent {
 @ViewChild('childModal') public childModal: ModalDirective;

constructor(private router: Router){}


}