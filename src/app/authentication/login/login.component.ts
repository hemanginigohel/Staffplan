import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticateUserService } from "../../authenticate-user.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginform') form:any;
  constructor(private router:Router,private service:AuthenticateUserService,private cookie:CookieService) { }
  object:any;
  newvar:any;
  ngOnInit(){ 
  }
  onsubmit(){
    this.object={
      username:this.form.controls.username.value,
      password:this.form.controls.password.value
    }
    this.service.authenticate(this.object)
    .subscribe(response=>{
      this.newvar=response;
      /* checks for null data variable so that not gives error on null data variable.  */
      if(this.newvar.data!=null){
      this.cookie.set("SessionId",this.newvar.data.token);
      this.router.navigateByUrl("/home");
      }
    })  
  }
} 
