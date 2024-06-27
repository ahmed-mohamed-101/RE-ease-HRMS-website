import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  token: string | null;
  constructor(
    private _ManageusersService: ManageusersService,
    private _Router: Router,
    private _ToastrService:ToastrService
  ) {
    this.token = localStorage.getItem('etoken');
  }

  // userData:any={name:'',email:'',position:'',salary:''}

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
  }

  handleForm() {
    if (this.userForm.valid) {
      this._ManageusersService
        .addUser(this.token, this.userForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this._ToastrService.success(response.message)
            this._Router.navigate(['/systemlayout/adminmanageusers']);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
