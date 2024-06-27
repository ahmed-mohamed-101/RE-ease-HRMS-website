import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';

@Component({
  selector: 'app-admin-manage-attendence',
  templateUrl: './admin-manage-attendence.component.html',
  styleUrls: ['./admin-manage-attendence.component.css'],
})
export class AdminManageAttendenceComponent implements OnInit {
  token: string | null;
  constructor(
    private _ManageusersService: ManageusersService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.token = localStorage.getItem('etoken');
  }

  ngOnInit(): void {
    this.showAttendence();
  }

  // showAttendence

  attendence: any = [];
  showAttendence() {
    this._ManageusersService.showAttendence(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.attendence = response;
      },
    });
  }

  // search
  userEmail: string = '';
  userDate: string = '';
  userSearch: any = {};

  handleForm() {
    this.userSearch = {
      token: this.token,
      email: this.userEmail,
      date: this.userDate,
    };

    this._ManageusersService.searchAttendence(this.userSearch).subscribe({
      next: (response) => {
        console.log(response);
        this.attendence = response;
      },
    });
  }

  onSearchInput() {
    let userEmail: any = this.userEmail.trim();
    let userDate: any = this.userDate.trim();
    if (!userEmail && !userDate) {
      this.showAttendence();
    }
  }
}
