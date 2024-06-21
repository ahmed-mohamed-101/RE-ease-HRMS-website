import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private _EmployeesService: EmployeesService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {}
  msgerror: string = '';
  isloading: boolean = false;


  loginform: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
    ],
  });

  handleForm():void {
    if (this.loginform.valid) {

      this.isloading = true;
      console.log(this.loginform.value);

      this._EmployeesService.userLogin(this.loginform.value).subscribe({
        next: (response) => {
          console.log(response);
          this._Router.navigate(['/userLayout/dashboarduser']);
          this.isloading = false;
          localStorage.setItem('etoken', response.token);
        },
        error: (err: HttpErrorResponse) => {
          this.msgerror = err.error.message;
          this.isloading = false;
        },
      });
    }
  }
}
