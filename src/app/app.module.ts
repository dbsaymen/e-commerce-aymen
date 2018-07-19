import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarrComponent } from './shared/nav-barr/nav-barr.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ProduitComponent } from './shared/produit/produit.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { DetailProdComponent } from './main/detail-prod/detail-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarrComponent,
    FooterComponent,
    MainPageComponent,
    ProduitComponent,
    DetailProdComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
