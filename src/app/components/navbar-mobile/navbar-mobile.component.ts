import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent implements OnInit {
  menu = false
  
  constructor() {}

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.menu = !this.menu
  }
}
