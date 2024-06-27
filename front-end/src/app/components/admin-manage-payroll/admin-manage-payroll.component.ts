import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';

@Component({
  selector: 'app-admin-manage-payroll',
  templateUrl: './admin-manage-payroll.component.html',
  styleUrls: ['./admin-manage-payroll.component.css'],
})
export class AdminManagePayrollComponent implements OnInit {
  constructor(
    private _ManageusersService: ManageusersService,
    private _ActivatedRoute: ActivatedRoute,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.showAll();
    this.setGenerateData();
  }

  token: any = localStorage.getItem('etoken');

  payrolls: any = [];

  // showAll
  showAll() {
    this._ManageusersService.showPayrolls(this.token).subscribe({
      next: (response) => {
        console.log(response);
        this.payrolls = response;
      },
    });
  }

  // getPay
  getPay(getPayId: any) {
    this._ManageusersService.getPay(getPayId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.info(response.msg);
        this.showAll();
      },
    });
  }

  // delete
  delete(userId: any) {
    this._ManageusersService.deletePayroll(userId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.msg);
        this.showAll();
      },
    });
  }

  // search
  name: string = '';
  month: string = '';
  year: string = '';
  status: string = '';
  userSearch: any = {};

  handleForm() {
    this.userSearch = {
      token: this.token,
      name: this.name,
      month: this.month,
      year: this.year,
      status: this.status,
    };
    this._ManageusersService.searchPayroll(this.userSearch).subscribe({
      next: (response) => {
        console.log(response);
        this.payrolls = response;
      },
    });
  }

  onSearchInput() {
    let name = this.name.trim();
    let month = this.month.trim();
    let year = this.year.trim();
    let status = this.status.trim();
    if (!name && !month && !year && !status) {
      this.showAll();
    }
  }

  // generate
  userForm!: FormGroup;
  setGenerateData() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      allowance: new FormControl('', [Validators.required]),
      deduction: new FormControl('', [Validators.required]),
    });
  }

  generateForm() {
    if (this.userForm.valid) {
      this._ManageusersService
        .generate(this.token, this.userForm.value)
        .subscribe({
          next: (response) => {
            this._ToastrService.success(response.msg)
            console.log(response);

            this._ToastrService.success(response.msg);
            this.showAll();
          },error:(err)=>{
            console.log(err);

         this._ToastrService.error(err.HttpErrorResponse.msg)
          }
        });
    }
  }
}
