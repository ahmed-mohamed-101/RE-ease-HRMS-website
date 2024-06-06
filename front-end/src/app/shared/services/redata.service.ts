import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedataService {

  constructor(private _HttpClient:HttpClient){}

  getallrealestate():Observable<any>{
   return this._HttpClient.post(`http://localhost:3000/adminManageRE/showAll`,this.token)
  }


  token:any ={token:localStorage.getItem('etoken')} ;



  // checkoutannually():Observable<any>{
  //   return this._HttpClient.post(`http://localhost:3000/payment/annually`, this.token)
  // }

}
