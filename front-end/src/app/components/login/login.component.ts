import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router, private _FormBuilder:FormBuilder){}



  msgerror:string=''
  isloading:boolean=false

  //  loginform:FormGroup=new FormGroup({
  //        email:new FormControl(null,[Validators.required,Validators.email]),
  //    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),


  //  });

loginform:FormGroup=this._FormBuilder.group({
  email:[null,[Validators.required,Validators.email]],
  password:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]]
})


  handleform():void{
     if(this.loginform.valid){
       this.isloading=true;
       console.log(this.loginform.value);
       this._AuthService.setlogin(this.loginform.value).subscribe(
         {
            next:(response)=>{
              console.log(response)
              this._Router.navigate(['/systemlayout/adminmanageusers'])
              this.isloading=false;
              localStorage.setItem('etoken',response.token)
              if (response.payment_id){
                this._Router.navigate(['/systemlayout/dashboard'])
              }
              else{
                this._Router.navigate(['/payment'])
              }
            },
            error:(err:HttpErrorResponse)=>{
              //  console.log(err.error.message)
               this.msgerror=err.error.message
               this.isloading=false;
            }
         }
       )
     }
   }

}
