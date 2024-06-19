import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';

@Component({
  selector: 'app-admin-manage-leaves',
  templateUrl: './admin-manage-leaves.component.html',
  styleUrls: ['./admin-manage-leaves.component.css'],
})
export class AdminManageLeavesComponent implements OnInit {
  userId: any;
  constructor(
    private _ManageusersService: ManageusersService,
    private _ActivatedRoute: ActivatedRoute,
    private _ToastrService: ToastrService
  ) {
    this.userId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }

  token: any = localStorage.getItem('etoken');

  ngOnInit(): void {
    // if (this.userId) {
    //   this.delete(this.userId);
    // }
    this.showLeaves();
  }

  // showLeaves

  leaves: any[] = [];

  showLeaves() {
    this._ManageusersService.showLeaves(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.leaves = response;
      },
    });
  }

  // search
  userName: string = '';
  userLeaveType: string = '';
  userStatus: string = '';
  userSearch: any = {};

  handleForm() {
    this.userSearch = {
      token: this.token,
      name: this.userName,
      leaveType: this.userLeaveType,
      status: this.userStatus,
    };
    this._ManageusersService.searchLeaves(this.userSearch).subscribe({
      next: (response) => {
        console.log(response);
        this.leaves = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSearchInput() {
    let name = this.userName.trim();
    let leaveType = this.userLeaveType.trim();
    let status = this.userStatus.trim();
    if (!name && !leaveType && !status) {
      this.showLeaves();
    }
  }

  // changeStatus
  statusApproved: { status: string } = { status: 'approved' };
  changeStatusApproved(leaveId: any) {
    this._ManageusersService
      .changeStatus(leaveId, this.statusApproved)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.showLeaves();
          this._ToastrService.success(response.msg);
        },
      });
  }
  statusRejected: { status: string } = { status: 'rejected' };
  changeStatusRejected(leaveId: any) {
    this._ManageusersService
      .changeStatus(leaveId, this.statusRejected)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.showLeaves();
          this._ToastrService.success(response.msg);
        },
      });
  }

  // delete
  delete(leaveId: string) {
    this._ManageusersService.deleteId(leaveId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.warning(response.message);
        this.showLeaves();
      },
    });
  }
}
