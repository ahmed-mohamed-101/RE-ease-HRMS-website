import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _HttpClient: HttpClient) {}
  token: any = { token: localStorage.getItem('etoken') };

  // clockIn
  clockIn(token: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userViewDataAndRecordAttendance/clockIn`,
      this.token
    );
  }

  // clockOut
  clockOut(token: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userViewDataAndRecordAttendance/clockOut`,
      this.token
    );
  }

  // userLogin
  userLogin(userData: object): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/auth/userLogin`,
      userData
    );
  }

  // showAll
  showAll(token: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userApplyAndViewLeave/showAll`,
      this.token
    );
  }

  // applyLeave
  applyLeave(token: any, userData: object): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userApplyAndViewLeave/applyLeave`,
      { token, ...userData }
    );
  }

  // leaveId
  leaveId(leaveId: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/userApplyAndViewLeave/getDescription/${leaveId}`
    );
  }

  // search
  search(userData: object): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/userApplyAndViewLeave/search`,
      userData
    );
  }
}
