import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  
  {
    path: "", loadChildren: "../authentication/authentication.module#AuthenticationModule"
  },
  {
    path:"" ,loadChildren:"../main/main.module#MainModule" 
  }
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
