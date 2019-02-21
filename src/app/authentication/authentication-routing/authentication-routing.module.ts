import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../login/login.component';
import { ForgotPassComponent } from '../forgot-pass/forgot-pass.component';
const routes: Routes = [
  {
    path: "", redirectTo: "authentication/login", pathMatch: "full"
  },
  {
    path: "authentication/login", component: LoginComponent
  },
  {
    path: "forgot_pass", component: ForgotPassComponent
  }
  
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
