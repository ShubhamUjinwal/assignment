import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
