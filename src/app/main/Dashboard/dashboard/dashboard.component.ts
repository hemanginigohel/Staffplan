import { Component, OnInit } from '@angular/core';
import {  CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cookieservice:CookieService) {
    console.log(localStorage.getItem("SessionId"),"-->cookie value inside dashboard");
   }

  ngOnInit() {
    
  }

}
