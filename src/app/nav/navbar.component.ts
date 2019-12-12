import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .nav.navbar-nav {font-size: 15px;}
    #searForm {margin-right: 100px;}
    li > a.active {color: #f89406;}
    `
  ]
})
export class NavBarComponent {

}
