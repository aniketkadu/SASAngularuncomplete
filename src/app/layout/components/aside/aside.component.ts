import { Component } from "@angular/core";

@Component({
    selector: 'sidebar-component',
    templateUrl: 'aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class SidebarComponent {
    //TO open side menu
    openNav() {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "150px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    //TO close side menu
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
       
    }

}