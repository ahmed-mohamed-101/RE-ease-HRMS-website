import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _HttpClient: HttpClient) {}
  token: any = { token: localStorage.getItem('etoken') };

  // apply leave
  applyLeave(token: any, userData: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userApplyLeave/applyLeave`,
      { token, ...userData }
    );
  }

  // clockIn
  clockIn(token: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userViewDataAndRecordAttendance/clockIn`,this.token);
  }

  // clockOut
  clockOut(token: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userViewDataAndRecordAttendance/clockOut`,this.token);
  }

  // userLogin
  userLogin(userData: object): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/auth/userLogin`, userData);
  }
}
