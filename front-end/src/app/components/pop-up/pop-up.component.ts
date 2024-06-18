import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  token: string | null;
  constructor(
    private _EmployeesService: EmployeesService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.token = localStorage.getItem('etoken');
  }
  ngOnInit(): void {
    this.getId();
  }

  employeeData: any = {};

  // getId
  getId() {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let leaveId: any = params.get('id');
        this._EmployeesService.leaveId(leaveId).subscribe({
          next: (response) => {
            this.employeeData = response.description;
            console.log(response.description);
          },
        });
      },
    });
  }
}
