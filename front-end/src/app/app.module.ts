import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { TakeAttendenceComponent } from './components/take-attendence/take-attendence.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { UserLeaveComponent } from './components/user-leave/user-leave.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { AdminManageLeavesComponent } from './components/admin-manage-leaves/admin-manage-leaves.component';
import { AdminDescriptionComponent } from './components/admin-description/admin-description.component';
import { AdminManageAttendenceComponent } from './components/admin-manage-attendence/admin-manage-attendence.component';
import { EditAttendenceComponent } from './components/edit-attendence/edit-attendence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserPayrollComponent } from './components/user-payroll/user-payroll.component';

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
    UserLoginComponent,
    UserLayoutComponent,
    TakeAttendenceComponent,
    UsersidebarComponent,
    UserLeaveComponent,
    PopUpComponent,
    DashboardUserComponent,
    AdminManageLeavesComponent,
    AdminDescriptionComponent,
    AdminManageAttendenceComponent,
    EditAttendenceComponent,
    UserPayrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
