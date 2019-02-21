import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing/authentication-routing.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    AuthenticationRoutingModule
  ],
  declarations: [LoginComponent, ForgotPassComponent]
})
export class AuthenticationModule { }
