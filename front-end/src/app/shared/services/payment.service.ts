import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient ,private _Router:Router) { }

  

  checkoutannually():Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/payment/annually`,
    {token:localStorage.getItem('etoken')})     
  }

  checkoutmonthly():Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/payment/monthly`,
    {token:localStorage.getItem('etoken')})
  }




}
