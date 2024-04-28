import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient ,private _Router:Router) { }
 
  setregister(userdata:object):Observable<any>{
    return  this._HttpClient.post(`http://localhost:3000/adminAuth/adminSignup`,userdata)
  }

   
  setlogin(userdata:object):Observable<any>{
    return  this._HttpClient.post(`http://localhost:3000/adminAuth/adminLogin`,userdata)
  }


  logout():void{
  localStorage.removeItem('etoken');
  this._Router.navigate(['/login'])

  }

}
 