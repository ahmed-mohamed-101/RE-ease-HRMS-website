import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
})
export class DashboardUserComponent implements OnInit {
  constructor(private _EmployeesService: EmployeesService) {}

  token: any = localStorage.getItem('id');

  ngOnInit(): void {
    this.dashboard();
  }

  details: any = {};
  dashboard() {
    this._EmployeesService.dashboard(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.details = response;
        this.dashboard
      },
    });
  }
}
