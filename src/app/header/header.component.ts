import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuButton(menu, menuU) {
    if (menu.style.left == '-200px') {
      menu.style.left = '0px';
      menuU.style.right = '-200px';
    } else {
      menu.style.left = '-200px';
    }
  }

  menuUser(menu, menuU) {
    if (menuU.style.right == '0px') {
      menuU.style.right = '-200px';
    } else {
      menuU.style.right = '0px';
      menu.style.left = '-200px'

    }
  }


}
