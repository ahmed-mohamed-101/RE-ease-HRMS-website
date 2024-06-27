import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-user-payroll',
  templateUrl: './user-payroll.component.html',
  styleUrls: ['./user-payroll.component.css'],
})
export class UserPayrollComponent implements OnInit {
  token: string | null;
  constructor(private _EmployeesService: EmployeesService) {
    this.token = localStorage.getItem('etoken');
  }

  ngOnInit(): void {
    this.showAll();
  }

  payrolls: any = [];

  // showAll
  showAll() {
    this._EmployeesService.showPayroll(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.payrolls = response;
      },
    });
  }

  // search
  month: string = '';
  year: string = '';
  userSearch: any = {};

  handleForm() {
    this.userSearch = {
      token: this.token,
      month: this.month,
      year: this.year,
    };
    this._EmployeesService.searchPayroll(this.userSearch).subscribe({
      next: (response) => {
        console.log(response);
        this.payrolls = response;
      },
    });
  }

  onSearchInput() {
    let month = this.month;
    let year = this.year;
    if (!month && !year) {
      this.showAll();
    }
  }
}
