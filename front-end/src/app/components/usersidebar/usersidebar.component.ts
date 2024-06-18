import { Component, OnInit } from '@angular/core';
import { DecodedService } from 'src/app/shared/services/decoded.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css'],
})
export class UsersidebarComponent implements OnInit {
  constructor(private _DecodedService: DecodedService) {}

  ngOnInit(): void {
    this.initNavbarToggle();
    this.userData();
  }

  initNavbarToggle(): void {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler?.addEventListener('click', () => {
      navbarCollapse?.classList.toggle('show');
    });
  }
  deleteItem() {
    localStorage.removeItem('etoken');
  }

  userInfo: any;
  userData(): void {
    this.userInfo = this._DecodedService.getUserInfo();
    console.log(this.userInfo);
  }
}
