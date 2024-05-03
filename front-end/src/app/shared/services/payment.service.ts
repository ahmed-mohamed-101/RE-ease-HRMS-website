import { jwtDecode } from 'jwt-decode';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient ,private _Router:Router) { }

  // ngOnInit(): void {
  //   console.log(this.usertoken)
  // }

  usertoken:any;

  token:any ={token:localStorage.getItem('etoken')} ;


//  saveusertoken(){
//  if(localStorage.getItem('etoken') != null){

//   let encodetoken:any =localStorage.getItem('etoken');

//   let decodetoken= jwtDecode(encodetoken);

//   this.usertoken=decodetoken;



//  }
//  }

  checkoutannually():Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/payment/annually`, this.token)     
  }

  checkoutmonthly():Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/payment/monthly`, this.token)
  }




}
