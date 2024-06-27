// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-adminmanagre',
//   templateUrl: './adminmanagre.component.html',
//   styleUrls: ['./adminmanagre.component.css']
// })
// export class AdminmanagreComponent {

// }



import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RedataService } from 'src/app/shared/services/redata.service';
import { RouterLink,RouterModule,RouterLinkActive } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';
import { ToastrService } from 'ngx-toastr';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-adminmanagre',
  templateUrl: './adminmanagre.component.html',
  styleUrls: ['./adminmanagre.component.css']
})
export class AdminmanagreComponent implements OnInit {
  token: string | null;
  constructor(private _RedataService: RedataService,private _Router:Router , private _ManageusersService:ManageusersService,
    private _ToastrService:ToastrService
  ) {
    this.token = localStorage.getItem('etoken');
  }

  // realestates: any[] = [];
  // filterizedre: any[] = [];
  // searchterm: string = '';
  // searchPerformed: boolean = false;



  ngOnInit(): void {

    this.showRE()

  }





  navigateToAddRe() {
    this._Router.navigate(['/systemlayout/addre']);
  }

  navigateToEditRe(id: number) {
    this._Router.navigate(['/systemlayout/editre', id]);
  }




   // showRE
   RE: any = [];
   showRE() {
     this._ManageusersService.showRE(this.token).subscribe({
       next: (response) => {
         this.RE = response;
         console.log(response);
       },
     });
   }


  // search
  searchNew:string='';
  userSearch:any={}

handleForm(){
this.userSearch={
  token:this.token,
  search:this.searchNew
}

this._ManageusersService.searchRE(this.userSearch).subscribe({
  next:(response)=>{
console.log(response);
this.RE=response

  }
})
}

onSearchInput(){
  let searchRENew=this.searchNew.trim()
 if(!searchRENew){
   this.showRE()
 }
}

// delete
delete(reId:any){

  this._ManageusersService.deleteRE(reId).subscribe({
    next:(response)=>{
console.log(response);
this._ToastrService.success(response.message)
this.showRE()

    }

  })
 }


}

