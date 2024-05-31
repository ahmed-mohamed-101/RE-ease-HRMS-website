
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class  ManageusersService {

  constructor(private _HttpClient:HttpClient) { }

  token:any ={token:localStorage.getItem('etoken')};

  // show all
  showAll(userToken:any):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/adminManageUsers/showAll`,this.token)
  }

  //addUser
  addUser(token:any,userData:any):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/adminManageUsers/addUser`,{token,...userData})
  }

// search
search(userData:object):Observable<any>{
  console.log(userData);

  return this._HttpClient.post(`http://localhost:3000/adminManageUsers/search`,userData)
}

// getId
getId(userId:any):Observable<any>{
return this._HttpClient.get(`http://localhost:3000/adminManageUsers/getUser/${userId}`)
}

// edit
edit(userId:any):Observable<any>{
return this._HttpClient.get(`http://localhost:3000/adminManageUsers/editUser/${userId}`)
}

// delete
delete(userId:any):Observable<any>{
  return this._HttpClient.get(`http://localhost:3000/adminManageUsers/deleteUser/${userId}`)
}
}

