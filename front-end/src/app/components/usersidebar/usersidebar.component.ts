import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initNavbarToggle();
  }

  initNavbarToggle(): void {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler?.addEventListener('click', () => {
      navbarCollapse?.classList.toggle('show');
    });
  }


}


