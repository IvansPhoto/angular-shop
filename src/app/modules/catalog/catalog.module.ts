import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutListComponent } from './produt-list/produt-list.component';
import { ProdutViewComponent } from './produt-view/produt-view.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import {CatalogRoutingModule} from "./catalog-routing.module";



@NgModule({
  declarations: [
    ProdutListComponent,
    ProdutViewComponent,
    CartIconComponent,
    CartViewComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
