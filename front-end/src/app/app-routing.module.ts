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
import { UserPayslipComponent } from './components/user-payslip/user-payslip.component';
import { AdminManagePayrollComponent } from './components/admin-manage-payroll/admin-manage-payroll.component';
import { AddreComponent } from './components/addre/addre.component';
import { EditreComponent } from './components/editre/editre.component';
import { UsermanagereComponent } from './components/usermanagere/usermanagere.component';
import { DocumentViewComponent } from './components/document-view/document-view.component';
import { DocumentReComponent } from './components/document-re/document-re.component';
import { DocAdminComponent } from './components/doc-admin/doc-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Real Estate Ease',
  },
  { path: 'signup', component: SignupComponent, title: 'Real Estate Ease' },
  { path: 'login', component: LoginComponent, title: 'Real Estate Ease' },
  { path: 'home', component: HomeComponent, title: 'Real Estate Ease' },
  { path: 'payment', component: PaymentComponent, title: 'Real Estate Ease' },
  {
    path: 'systemlayout',
    component: SystemlayoutComponent,
    title: 'Real Estate Ease',

    children: [
      { path: 'adminmanageusers', component: AdminmanageusersComponent },
      { path: 'adminmanagere', component: AdminmanagreComponent },
      { path: 'dashboard', component: DashboardComponent },
      {path:'addre',component:AddreComponent},
      {path:'editre/:id',component:EditreComponent},
      {
        path: 'adminManageLeaves',
        component: AdminManageLeavesComponent,
      },
      {
        path: 'adminManageAttendence',
        component: AdminManageAttendenceComponent,
      },
      {
        path: 'adminManagePayrolls',
        component: AdminManagePayrollComponent,
      },
    ],
  },


  { path: 'adduser', component: AdduserComponent, title: 'Real Estate Ease' },
  {
    path: 'edituser/:id',
    component: EditEmployeeComponent,
    title: 'Real Estate Ease',
  },
  { path: 'userLogin', component: UserLoginComponent },
  {
    path: 'editAttendence/:id',
    component: EditAttendenceComponent,
    title: 'Real Estate Ease',
  },
  {path:'viewDoc/:id',component:DocAdminComponent},

  {
    path: 'userLayout',
    component: UserLayoutComponent,
    title: 'Real Estate Ease',
    children: [
      { path: 'takeatt', component: TakeAttendenceComponent },
      {
        path: 'leaveReq',
        component: UserLeaveComponent,
      },
      { path: 'dashboarduser', component: DashboardUserComponent },
      { path: 'userPayroll', component: UserPayrollComponent },
      {path:'usermanagere',component:UsermanagereComponent},
    ],
  },
  {
    path: 'userPayslip/:id',
    component: UserPayslipComponent,
    title: 'Real Estate Ease',
  },
  { path: 'popup/:id', component: PopUpComponent, title: 'Real Estate Ease' },
  {
    path:'document-view',component: DocumentViewComponent
  },
  {
    path: 'adminDescription/:id',
    component: AdminDescriptionComponent,
    title: 'Real Estate Ease',
  },
  {path:'document/:id',component:DocumentReComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
