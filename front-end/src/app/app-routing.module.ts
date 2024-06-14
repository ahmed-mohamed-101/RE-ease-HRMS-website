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


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent },
  {path:'payment',component:PaymentComponent},
  {  path:'systemlayout', component:SystemlayoutComponent,
  children: [
   {path:'adminmanageusers',component:AdminmanageusersComponent},
   {path:'adminmanagere',component:AdminmanagreComponent},
   {path:'dashboard',component:DashboardComponent}

  ]
  },

  {path:'adduser',component:AdduserComponent },
  {path:'edituser/:id',component:EditEmployeeComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'userLayout',component:UserLayoutComponent, children:[
    {path:'takeatt',component:TakeAttendenceComponent}
  ]
    },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
