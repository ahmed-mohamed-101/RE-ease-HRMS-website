import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';
import { AdminmanageusersComponent } from '../adminmanageusers.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  token: string | null;
  userForm!: FormGroup;
  userId: any;
  employeeData: any = {};

  constructor(
    private _ManageusersService: ManageusersService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _ToastrService:ToastrService
  ) {
    this.token = localStorage.getItem('etoken');
    this.userId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.userId) {
      this.fetchUserData(this.userId);
    }
    this.initializeEditForm();
  }

  initializeEditForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
  }
  setFormData(data: any) {
    this.userForm.patchValue({
      name: data.name,
      email: data.email,
      position: data.position,
      salary: data.salary,
    });
  }
  fetchUserData(userId: any) {
    this._ManageusersService.getId(userId).subscribe({
      next: (response) => {
        this.employeeData = response;
        this.setFormData(response);
      },
    });
  }

  // edit

  editUser(userId: any): void {
    this._ManageusersService.edit(userId, this.userForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message)
        this._Router.navigate(['/systemlayout/adminmanageusers']);
      },
    });
  }
}
