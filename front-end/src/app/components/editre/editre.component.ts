// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-editre',
//   templateUrl: './editre.component.html',
//   styleUrls: ['./editre.component.css']
// })
// export class EditreComponent {

// }



import { Component, OnInit } from '@angular/core';
import { RedataService } from 'src/app/shared/services/redata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Route } from '@angular/router';
@Component({
  selector: 'app-editre',
  templateUrl: './editre.component.html',
  styleUrls: ['./editre.component.css']
})
export class EditreComponent implements OnInit{

  constructor(private _RedataService: RedataService, private _Router: Router, private route: ActivatedRoute) {

     }


     token = localStorage.getItem('etoken');
     userForm!: FormGroup;
     reId!: number;
     realEstate: any;

     ngOnInit(): void {
       this.reId = +(this.route.snapshot.paramMap.get('id') ?? 0);

       // Initialize the form before making the API call
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

       // Load the real estate data
       this.loadRealEstate();
     }

     loadRealEstate(): void {
       this._RedataService.getRealEstateById(this.reId).subscribe({
         next: (data) => {
          console.log(data)
           if (data && data.length > 0) {
             this.realEstate = data[0];
             this.userForm.patchValue({
               owner: this.realEstate.owner,
               type: this.realEstate.type,
               address: this.realEstate.address,
               size: this.realEstate.size,
               status: this.realEstate.status,
               price: this.realEstate.price,
               assigned_to: this.realEstate.assigned_to,
               document: this.realEstate.document
             });
           }
         },
         error: (error) => {
           console.error('Error fetching real estate data:', error);
         }
       });
     }


  handleForm(): void {
    if (this.userForm.valid) {
      this._RedataService.editre(this.reId,this.userForm.value).subscribe({
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

