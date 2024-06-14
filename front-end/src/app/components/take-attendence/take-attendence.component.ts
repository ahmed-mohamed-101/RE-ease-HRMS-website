import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.css'],
})
export class TakeAttendenceComponent implements OnInit {
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
  }
  message:any;

  // leaveForm
  handleForm() {
    if (this.userForm.valid) {
      this._EmployeesService
        .applyLeave(this.token, this.userForm.value)
        .subscribe({
          next: (response) => {
            console.log(response.msg);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }
  // clockIn
  clockIn() {
    this._EmployeesService.clockIn(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.message=response.msg;
      },
    });
  }

  // clockOut
  clockOut() {
    this._EmployeesService.clockOut(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.message=response.msg;
      },
    });
  }
}
