import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-barr',
  templateUrl: './nav-barr.component.html',
  styleUrls: ['./nav-barr.component.css']
})
export class NavBarrComponent implements OnInit {
  item: number;
  constructor() {
  }

  ngOnInit() {
    this.item = 0;
  }
  nextImage() {
    this.item = ((this.item + 1) % 4);
  }
}
