import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecodedService } from 'src/app/shared/services/decoded.service';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-user-payslip',
  templateUrl: './user-payslip.component.html',
  styleUrls: ['./user-payslip.component.css'],
})
export class UserPayslipComponent implements OnInit {
  constructor(
    private _EmployeesService: EmployeesService,
    private _ActivatedRoute: ActivatedRoute,
    private _DecodedService: DecodedService
  ) {}
  ngOnInit(): void {
    this.getPaySlip();
    this.decode();
  }
  payslip: any = [];

  getPaySlip() {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let id: any = params.get('id');
        this._EmployeesService.getPaySlip(id).subscribe({
          next: (response) => {
            console.log(response);
            this.payslip = response;
          },
        });
      },
    });
  }
  userInfo: any;
  decode() {
    this.userInfo = this._DecodedService.getUserInfo();
    console.log(this.userInfo);
  }
}
