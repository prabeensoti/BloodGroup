import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  show: Boolean = false;

  toggleCollapse() {
    this.show = !this.show;
  }
  hideCollapse() {
    setTimeout(() => {
      this.show = false;
   }, 0);
  }
  constructor() { }

  ngOnInit() {
  }

}
