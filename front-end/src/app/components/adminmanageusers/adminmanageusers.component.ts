

import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';


@Component({
  selector: 'app-adminmanageusers',
  templateUrl: './adminmanageusers.component.html',
  styleUrls: ['./adminmanageusers.component.css']
})
export class AdminmanageusersComponent implements OnInit {

  constructor(private _ManageusersService:ManageusersService,private _ActivatedRoute:ActivatedRoute, private _Router:Router){}


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

  // delete
  deleteEmployee(userId:string):void{
    this._ManageusersService.delete(userId).subscribe({
      next:(response)=>{
    

     console.log(response);

      }
    })
  }

getId():void{
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      let userId:any =params.get('id');
      this._ManageusersService.getId(userId).subscribe({
        next:(response)=>{
         this.employeeData=response
         console.log(params);

          console.log(response);
          console.log(userId);


        }
      })
    }
  })




}

}

