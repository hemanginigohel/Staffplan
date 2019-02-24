import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  private headers: HttpHeaders = new HttpHeaders();
  private httpheaders: any;
  httpHeader: any;

  constructor(private httpclient: HttpClient, private cookie: CookieService) {
    if (localStorage.getItem('SessionId') !== null) {
      this.headers = this.headers.append("SessionId", localStorage.getItem("SessionId"))
    }
    this.httpheaders={
        headers: this.headers
      }
    // else{
    //   this.headers=null;  
    // }
  }
  authenticate(object): Observable<any> {
    console.log("inside service");
    return this.httpclient.post<any>("http://localhost:4300/api/authenticate", object);
  }


  get_access_type(): Observable<any> {
    console.log(this.headers,"header inside acesstype");
    return this.httpclient.get("http://localhost:4300/api/getAllAccessType", this.httpheaders);
  }
  label(): Observable<any> {

    console.log(this.headers);
    return this.httpclient.post("http://localhost:4300/api/getProjectList", this.httpheaders);
  }
}
