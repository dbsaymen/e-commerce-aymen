import { Component, OnInit } from '@angular/core';
import {Produit} from '../../shared/produit/produit.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  products: Produit[];
  constructor() { }

  ngOnInit() {
    this.products = [
      new Produit('Lenovo', 'i7, 8GB RAM, GTX 720M', ['../../../assets/prod/lap1.png', '../../../assets/prod/lap2.png'], '1500'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800'),
      new Produit('Acer', 'i7, 8GB RAM, GTX 1050ti', ['../../../assets/prod/lap2.png', '../../../assets/prod/lap1.png'], '1800')
    ];
  }

}
