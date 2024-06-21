// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { Router } from '@angular/router';
// import { RedataService } from 'src/app/shared/services/redata.service';

// @Component({
//   selector: 'app-addre',
//   templateUrl: './addre.component.html',
//   styleUrls: ['./addre.component.css']
// })
// export class AddreComponent implements OnInit{

// constructor(private _RedataService:RedataService,private _Router:Router){

// }


// token:any ={token:localStorage.getItem('etoken')} ;

  
// userForm!: FormGroup;


// ngOnInit():void{
//  this.userForm = new FormGroup({
//   owner: new FormControl('', [Validators.required]),
//   type: new FormControl('', [Validators.required]),
//   address: new FormControl('', [Validators.required]),
//   size: new FormControl('', [Validators.required]),
//   status: new FormControl('', [Validators.required]),
//   price: new FormControl('', [Validators.required]),
//   assigned_to: new FormControl('', [Validators.required]),
//   document: new FormControl('', [Validators.required]),
//   });
// }


// handleForm(): void {
//   if (this.userForm.valid) {
//     this._RedataService.addre(this.userForm.value).subscribe({
//       next: (response) => {
//         console.log(response);
//         this._Router.navigate(['/systemlayout/adminmanagere']);
//       },
//       error: (error) => {
//         console.error('Error:', error);
//       }
//     });
//   } else {
//     console.log('Form is invalid');
//   }
// }

// }



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RedataService } from 'src/app/shared/services/redata.service';

@Component({
  selector: 'app-addre',
  templateUrl: './addre.component.html',
  styleUrls: ['./addre.component.css']
})
export class AddreComponent implements OnInit {
  token: string | null;

  constructor(private _RedataService: RedataService, private _Router: Router) {
    this.token = localStorage.getItem('etoken');
  }

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      owner: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      assigned_to: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
    });
  }

  handleForm(): void {
    if (this.userForm.valid && this.token) {
      this._RedataService.addre(this.userForm.value, this.token).subscribe({
        next: (response) => {
          console.log(response);
          this._Router.navigate(['/systemlayout/adminmanagere']);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    } else {
      console.log('Form is invalid or token is missing');
    }
  }
}