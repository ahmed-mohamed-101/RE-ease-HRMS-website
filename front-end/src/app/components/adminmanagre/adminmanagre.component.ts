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
// import { Router } from '@angular/router';
@Component({
  selector: 'app-adminmanagre',
  templateUrl: './adminmanagre.component.html',
  styleUrls: ['./adminmanagre.component.css']
})
export class AdminmanagreComponent implements OnInit {
  constructor(private _RedataService: RedataService,private _Router:Router) {}

  realestates: any[] = [];
  filterizedre: any[] = [];
  searchterm: string = '';
  searchPerformed: boolean = false;




  ngOnInit(): void {
    this._RedataService.getallrealestate().subscribe({
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
    this._RedataService.searchre(this.searchterm).subscribe({
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



  navigateToAddRe() {
    this._Router.navigate(['/systemlayout/addre']);
  }

  navigateToEditRe(id: number) {
    this._Router.navigate(['/systemlayout/editre', id]);
  }


  deleteRealEstate(id: number) {
    if (confirm('Are you sure you want to delete this real estate?')) {
      this._RedataService.deleteRealEstate(id).subscribe({
        next: () => {
          console.log('Real estate deleted successfully');
          // Remove the deleted item from the local array
          this.realestates = this.realestates.filter(re => re.id !== id);
        },
        error: (err) => {
          console.error('Error deleting real estate:', err);
        }
      });
    }
  }


}

