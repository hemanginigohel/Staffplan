import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from '../Dashboard/dashboard/dashboard.component';
import { AdminComponent } from '../Dashboard/Components/admin/admin.component';
import { HomeComponent } from '../Dashboard/Components/home/home.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,

    children: [
      {
        path: "", redirectTo: "home", pathMatch: "full"
      },
      {
        path: "home", component: HomeComponent
      },
      {
        path: "admin", component: AdminComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }



