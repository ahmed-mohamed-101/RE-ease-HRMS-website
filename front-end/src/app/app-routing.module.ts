import { AdminManageAttendenceComponent } from './components/admin-manage-attendence/admin-manage-attendence.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SystemlayoutComponent } from './components/systemlayout/systemlayout.component';
import { AdminmanageusersComponent } from './components/adminmanageusers/adminmanageusers.component';
import { AdminmanagreComponent } from './components/adminmanagre/adminmanagre.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EditEmployeeComponent } from './components/adminmanageusers/edit-employee/edit-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { TakeAttendenceComponent } from './components/take-attendence/take-attendence.component';
import { UserLeaveComponent } from './components/user-leave/user-leave.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { AdminManageLeavesComponent } from './components/admin-manage-leaves/admin-manage-leaves.component';
import { AdminDescriptionComponent } from './components/admin-description/admin-description.component';
import { EditAttendenceComponent } from './components/edit-attendence/edit-attendence.component';
import { UserPayrollComponent } from './components/user-payroll/user-payroll.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'payment', component: PaymentComponent },
  {
    path: 'systemlayout',
    component: SystemlayoutComponent,
    children: [
      { path: 'adminmanageusers', component: AdminmanageusersComponent },
      { path: 'adminmanagere', component: AdminmanagreComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'adminManageLeaves',
        component: AdminManageLeavesComponent,
      },
      {
        path: 'adminManageAttendence',
        component: AdminManageAttendenceComponent,
      },
    ],
  },

  { path: 'adduser', component: AdduserComponent },
  { path: 'edituser/:id', component: EditEmployeeComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'editAttendence/:id', component: EditAttendenceComponent },
  {
    path: 'userLayout',
    component: UserLayoutComponent,
    children: [
      { path: 'takeatt', component: TakeAttendenceComponent },
      {
        path: 'leaveReq',
        component: UserLeaveComponent,
      },
      { path: 'dashboarduser', component: DashboardUserComponent },
      { path: 'userPayroll', component: UserPayrollComponent },
    ],
  },
  { path: 'popup/:id', component: PopUpComponent },
  { path: 'adminDescription/:id', component: AdminDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
