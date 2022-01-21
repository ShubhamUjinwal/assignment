import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct() {
    console.log(this.products)
    this.apiService.get(10).subscribe((res: any) => {
      this.products = res;
      console.log(this.products)
    })
  }
}
