import { Component, OnInit, Input } from '@angular/core';
import { Produit } from './produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() product: Produit;
  constructor() { }

  ngOnInit() {

  }

}
