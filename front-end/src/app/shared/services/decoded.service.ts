import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class DecodedService {
  constructor() {}

  getUserInfo(): any {
    if (localStorage.getItem('etoken') != null) {
      let encodedToken: any = localStorage.getItem('etoken');
      let decodedToken = jwtDecode(encodedToken);
      return decodedToken;
    }
  }
}
