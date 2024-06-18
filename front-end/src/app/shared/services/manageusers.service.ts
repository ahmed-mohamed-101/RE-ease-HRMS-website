import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class ManageusersService {
  constructor(private _HttpClient: HttpClient) {}

  token: any = { token: localStorage.getItem('etoken') };

  // show all
  showAll(userToken: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageUsers/showAll`,
      this.token
    );
  }

  //addUser
  addUser(token: any, userData: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageUsers/addUser`,
      { token, ...userData }
    );
  }

  // search
  search(userData: object): Observable<any> {
    console.log(userData);

    return this._HttpClient.post(
      `http://localhost:3000/adminManageUsers/search`,
      userData
    );
  }

  // getId
  getId(userId: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/adminManageUsers/getUser/${userId}`
    );
  }

  // edit
  edit(userId: any, userDetails: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageUsers/editUser/${userId}`,
      userDetails
    );
  }
  // delete
  delete(userId: string): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/adminManageUsers/deleteUser/${userId}`
    );
  }

  // admin manage leaves----------------//

  // showLeaves
  showLeaves(token: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageLeaves/showAll`,
      this.token
    );
  }

  // searchLeaves
  searchLeaves(leavesData: object): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageLeaves/search`,
      leavesData
    );
  }

  //  changeStatus
  changeStatus(leaveId: any, status: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageLeaves/changeStatus/${leaveId}`,
      status
    );
  }

  //  getDescription
  getDescription(leaveId: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/adminManageLeaves/getDescription/${leaveId}`
    );
  }

  // deleteId
  deleteId(leaveId: string): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/adminManageLeaves/deleteLeave/${leaveId}`
    );
  }
  // ---------------------------------

  // admin manage attendence---------------

  // showAttendence
  showAttendence(token: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageAttendance/showAll`,
      this.token
    );
  }

  // searchAttendence
  searchAttendence(attendence: object): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageAttendance/search`,
      attendence
    );
  }

  // getAttendenceId
  getAttendenceId(attendenceId: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/adminManageAttendance/getAttendance/${attendenceId}`
    );
  }

  //  editAttendence
  editAttendence(attendenceId: any, attendenceData: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:3000/adminManageAttendance/editAttendance/${attendenceId}`,
      attendenceData
    );
  }
}
