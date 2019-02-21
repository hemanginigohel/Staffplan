import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor(private httpclient:HttpClient) { }
  authenticate(object){
  return this.httpclient.post("http://localhost:4300/api/authenticate",object);
  }
}
