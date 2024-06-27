// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RedataService {

//   constructor(private _HttpClient:HttpClient){}

//   getallrealestate():Observable<any>{
//    return this._HttpClient.post(`http://localhost:3000/adminManageRE/showAll`,this.token)
//   }


//   token:any ={token:localStorage.getItem('etoken')} ;



//   // checkoutannually():Observable<any>{
//   //   return this._HttpClient.post(`http://localhost:3000/payment/annually`, this.token)
//   // }

// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RedataService {
  // private baseUrl = `http://localhost:3000/adminManageRE`;

  constructor(private _HttpClient:HttpClient){}

  token:any ={token:localStorage.getItem('etoken')} ;

  getallrealestate():Observable<any>{
   return this._HttpClient.post(`http://localhost:3000/adminManageRE/showAll`,this.token)
  }



  search(search: object): Observable<any> {

    return this._HttpClient.post(`http://localhost:3000/adminManageRE/search`, search);
  }


  addre(userForm: any, token: string): Observable<any> {
    const requestBody = { token, ...userForm };
    return this._HttpClient.post(`http://localhost:3000/adminManageRE/addRE`, requestBody);
  }


  // editre(userForm: any): Observable<any> {
  //   const requestBody = { userForm };
  //   return this._HttpClient.post(`http://localhost:3000/adminManageRE/editRE/2`, requestBody);
  // }
  editre(id: number, userForm: any): Observable<any> {
    const requestBody = { ...userForm };
    return this._HttpClient.post(`http://localhost:3000/adminManageRE/editRE/${id}`, requestBody);
  }



  getRealEstateById(id: number): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/adminManageRE/getRE/${id}`);
  }


  deleteRealEstate(id: number): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/adminManageRE/deleteRE/${id}`);
  }

}
