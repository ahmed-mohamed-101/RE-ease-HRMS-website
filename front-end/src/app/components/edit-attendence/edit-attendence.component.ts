import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';

@Component({
  selector: 'app-edit-attendence',
  templateUrl: './edit-attendence.component.html',
  styleUrls: ['./edit-attendence.component.css'],
})
export class EditAttendenceComponent implements OnInit {
  token: string | null;
  userId: any;
  userForm!: FormGroup;
  attendenceData: any = {};

  constructor(
    private _ManageusersService: ManageusersService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _ToastrService:ToastrService
  ) {
    this.token = localStorage.getItem('etoken');
    this.userId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.userId) {
      this.fetchUserData(this.userId);
    }
    this.editForm();
  }

  editForm() {
    this.userForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      clock_in: new FormControl('', [Validators.required]),
      in_status: new FormControl('', [Validators.required]),
      clock_out: new FormControl('', [Validators.required]),
      out_status: new FormControl('', [Validators.required]),
    });
  }
  setFormData(data: any) {
    this.userForm.patchValue({
      date: data.date,
      clock_in: data.clock_in,
      in_status: data.in_status,
      clock_out: data.clock_out,
      out_status: data.out_status,
    });
  }

  fetchUserData(userId: any) {
    this._ManageusersService.getAttendenceId(userId).subscribe({
      next: (response) => {
        this.attendenceData = response;
        this.setFormData(response);
      },
    });
  }

  editUser(userId: any): void {
    this._ManageusersService
      .editAttendence(userId, this.userForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          this._ToastrService.success(response.message)
          this._Router.navigate(['/systemlayout/adminManageAttendence']);
        },
      });
  }
}
