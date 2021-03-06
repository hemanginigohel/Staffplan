import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component'
import { MainRoutingModule } from './main-routing/main-routing.module';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';
import { AdminComponent } from './Dashboard/Components/admin/admin.component';
import { FooterComponent } from './Dashboard/footer/footer.component';
import { HomeComponent } from './Dashboard/Components/home/home.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [DashboardComponent, NavbarComponent, AdminComponent, FooterComponent, HomeComponent]

})
export class MainModule { }
