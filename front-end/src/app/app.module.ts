import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';

import { AdminmanageusersComponent } from './components/adminmanageusers/adminmanageusers.component';
import { AdminmanagreComponent } from './components/adminmanagre/adminmanagre.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { SystemlayoutComponent } from './components/systemlayout/systemlayout.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EditEmployeeComponent } from './components/adminmanageusers/edit-employee/edit-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { AddreComponent } from './components/addre/addre.component';
import { EditreComponent } from './components/editre/editre.component';
import { UsermanagereComponent } from './components/usermanagere/usermanagere.component';

import { DocumentViewComponent } from './components/document-view/document-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PaymentComponent,

    AdminmanageusersComponent,
    AdminmanagreComponent,
    SidenavbarComponent,
    SystemlayoutComponent,
    AdduserComponent,
    EditEmployeeComponent,
    DashboardComponent,
    AddreComponent,
    EditreComponent,
    UsermanagereComponent,

    DocumentViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
