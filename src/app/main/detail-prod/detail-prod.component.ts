import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent implements OnInit {
  Quantity = 10;
  constructor() { }

  ngOnInit() {
  }
  decQuantity() {
    this.Quantity--;
  }
  incQuantity() {
    this.Quantity++;
  }
}
