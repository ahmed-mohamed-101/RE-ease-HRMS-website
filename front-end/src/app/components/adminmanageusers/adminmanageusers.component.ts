

import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';


@Component({
  selector: 'app-adminmanageusers',
  templateUrl: './adminmanageusers.component.html',
  styleUrls: ['./adminmanageusers.component.css']
})
export class AdminmanageusersComponent implements OnInit {

  constructor(private _ManageusersService:ManageusersService,private _ActivatedRoute:ActivatedRoute){}


employeeData:any=[];

token:any =localStorage.getItem('etoken') ;
ngOnInit(): void {
this.displayAllUsers()

  }

  displayAllUsers(){
    this._ManageusersService.showAll(this.token).subscribe({
      next:(response)=>{
        this.employeeData=response
      },error:(err)=>{

      }
    })
  }
  onSearchInput(){
if(!this.userData.trim()){
  this.displayAllUsers()
}


  };

userData:any;
userSearch:any={};

  handleForm(){
    this.userSearch = {
      token: this.token,
      search:this.userData
    }

  this._ManageusersService.search(this.userSearch).subscribe({
   next:(response)=>{
    console.log(response);
    this.employeeData=response


   },error:(err)=>{
   console.log(err);

   }
  })
  }

 userDetails:any[]=[];
delete(){
 this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
  let id:any=params.get('id')
  this._ManageusersService.delete(id).subscribe({
    next:(response)=>{
    this.userDetails=response
    }
  })
  }
 })
}


}

