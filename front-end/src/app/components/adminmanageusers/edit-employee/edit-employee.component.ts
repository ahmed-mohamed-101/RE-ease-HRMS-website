import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';
import { AdminmanageusersComponent } from '../adminmanageusers.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  token:string | null;
constructor(private _ManageusersService:ManageusersService, private _ActivatedRoute:ActivatedRoute, private _AdminmanageusersComponent:AdminmanageusersComponent){
  this.token =localStorage.getItem('etoken') ;
}

// userData:any={name:'',email:'',position:'',salary:''}

userForm!: FormGroup;

 ngOnInit():void{
  this.userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
   });
 }

// getId


// getId():any{
//   this._ActivatedRoute.paramMap.subscribe({
//     next:(params)=>{

// let userId:any=params.get('id')
// this._ManageusersService.getId(userId).subscribe({
//   next:(response)=>{
//     console.log(response);
//       this._ManageusersService.edit(userId,this.userDetails).subscribe({
//         next:(response)=>{
//       console.log(response.message);
//         }
//       })
//   }
// })
//     }
//   })
// }


userDetails:any={name:'',email:'',position:'',salary:''}
userData:any={};

// edit





}



