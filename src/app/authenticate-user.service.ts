import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Headers } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor(private httpclient: HttpClient, private cookie: CookieService) {
  }
  authenticate(object) {
    return this.httpclient.post("http://localhost:4300/api/authenticate", object);
  }
  get_access_type() {
    var header = new HttpHeaders({ 'SessionId': this.cookie.get("SessionId") });
    return this.httpclient.get("http://localhost:4300/api/getAllAccessType", { headers: header });
  }
}
