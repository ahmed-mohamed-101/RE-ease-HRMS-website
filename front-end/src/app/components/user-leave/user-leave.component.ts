import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-user-leave',
  templateUrl: './user-leave.component.html',
  styleUrls: ['./user-leave.component.css'],
})
export class UserLeaveComponent implements OnInit {
  token: string | null;
  constructor(private _EmployeesService: EmployeesService) {
    this.token = localStorage.getItem('etoken');
  }
  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      leaveType: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

    this.showUserData();
  }
  message: any;

  // showUserData
  employeeData: any = [];
  showUserData() {
    this._EmployeesService.showAll(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.employeeData = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // applyLeave
  userData: any;
  applyLeave() {
    this._EmployeesService
      .applyLeave(this.token, this.userForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.userData = response.msg;
        },
      });
  }

  // search
  userLeave: any;
  userStatus: any;
  userSearch: any = {};

  handleForm() {
    this.userSearch = {
      token: this.token,
      leaveType: this.userLeave,
      status: this.userStatus,
    };
    this._EmployeesService.search(this.userSearch).subscribe({
      next: (response) => {
        console.log(response);
        this.employeeData = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSearchInput() {
    if (!this.userLeave.trim() && !this.userStatus.trim()) {
      this.showUserData();
    }
  }
}
