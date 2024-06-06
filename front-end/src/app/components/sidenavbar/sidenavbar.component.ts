import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

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

  deleteItem() {



   localStorage.removeItem('etoken')



}

}
