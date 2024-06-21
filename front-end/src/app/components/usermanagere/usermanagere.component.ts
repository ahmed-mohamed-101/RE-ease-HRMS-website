// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-usermanagere',
//   templateUrl: './usermanagere.component.html',
//   styleUrls: ['./usermanagere.component.css']
// })
// export class UsermanagereComponent {

// }




import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RedataService } from 'src/app/shared/services/redata.service';
import { RouterLink,RouterModule,RouterLinkActive } from '@angular/router';
import { UserredataService } from 'src/app/shared/services/userredata.service';
@Component({
  selector: 'app-usermanagere',
  templateUrl: './usermanagere.component.html',
  styleUrls: ['./usermanagere.component.css']
})
export class UsermanagereComponent {
constructor(private _UserredataService:UserredataService,private _Router:Router){}



realestates: any[] = [];
filterizedre: any[] = [];
searchterm: string = '';
searchPerformed: boolean = false;




ngOnInit(): void {
  this._UserredataService.getallrealestate().subscribe({
    next: (response: any) => {
      this.realestates = response;
      // console.log(this.realestates);
    },
    error: (err: any) => {
      console.log(err.error.message);
    }
  });
}

searchre(): void {
  this._UserredataService.searchre(this.searchterm).subscribe({
    next: (response: any) => {
      this.filterizedre = response;
      this.searchPerformed = true; // Mark that a search has been performed
      console.log(this.filterizedre);
    },
    error: (err: any) => {
      console.log(err.error.message);
    }
  });
}


viewDocument(id: number) {
  this._UserredataService.getDocumentUrl(id).subscribe(
    (response: any) => {
      // Assuming the response contains the URL of the document
      this._Router.navigate(['/document-view', response.document]);
    },
    (error: any) => {
      console.log(error.error.message);
    }
  );
}



changeStatus(id: number) {
  this._UserredataService.changeStatus(id).subscribe(
    (response: any) => {
      // Handle the response as needed
      console.log(response);
    },
    (error: any) => {
      console.log(error.error.message);
    }
  );
}






}
