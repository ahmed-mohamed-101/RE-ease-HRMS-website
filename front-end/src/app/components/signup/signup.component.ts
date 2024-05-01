import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}

  msgerror:string=''
  isloading:boolean=false
  
   registerform:FormGroup=new FormGroup({
     name:new FormControl(null,[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
     email:new FormControl(null,[Validators.required,Validators.email]),
     password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
     company_name:new FormControl(null,Validators.required)
 
 
   });
 
   handleform():void{
     if(this.registerform.valid){
       this.isloading=true;
       console.log(this.registerform.value);
       this._AuthService.setregister(this.registerform.value).subscribe(
         {
            next:(response)=>{
           
             console.log(response)
              this._Router.navigate(['/login'])
              this.isloading=false;
          
 
 
            },
            error:(err:HttpErrorResponse)=>{
               // console.log(err.error.message)
               this.msgerror=err.error.message
               this.isloading=false;
 
            }
   
         }
       )
     }
   }

}
