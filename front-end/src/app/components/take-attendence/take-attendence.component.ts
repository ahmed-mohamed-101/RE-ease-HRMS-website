import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DecodedService } from 'src/app/shared/services/decoded.service';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.css'],
})
export class TakeAttendenceComponent implements OnInit {
  token: string | null;
  constructor(
    private _EmployeesService: EmployeesService,
    private _DecodedService: DecodedService
  ) {
    this.token = localStorage.getItem('etoken');
  }

  message: any;
  // clockIn
  clockIn() {
    this._EmployeesService.clockIn(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.msg;
      },
    });
  }

  // clockOut
  clockOut() {
    this._EmployeesService.clockOut(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.msg;
      },
    });
  }

  // userInfo
  userInfo: any;
  ngOnInit(): void {
    this.userInfo = this._DecodedService.getUserInfo();
    console.log(this.userInfo);
  }
}
