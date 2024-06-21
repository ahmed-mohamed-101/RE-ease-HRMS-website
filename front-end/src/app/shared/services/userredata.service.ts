// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserredataService {

//   constructor() { }
// }




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserredataService {

  constructor(private _HttpClient:HttpClient){}


  token:any ={token:localStorage.getItem('etoken')} ;

  getallrealestate():Observable<any>{
   return this._HttpClient.post(`http://localhost:3000/userManageAssignedRE/showAll`,this.token)
  }



  searchre(searchTerm: string): Observable<any> {
    const body = {
      token: this.token.token,
      search: searchTerm
    };

    return this._HttpClient.post(`http://localhost:3000/userManageAssignedRE/search`, body);
  }


  getDocumentUrl(id: number): Observable<any> {
    // const body = {
    //   token: this.token.token,
    //   id: id
    // };

    return this._HttpClient.get(`http://localhost:3000/userManageAssignedRE/viewDocument/${id}`);
  }



  changeStatus(id: number): Observable<any> {
    const url = `http://localhost:3000/userManageAssignedRE/changeStatus/${id}`;
    const body = {
      token: this.token.token
    };

    return this._HttpClient.post(url, body);
  }


}
