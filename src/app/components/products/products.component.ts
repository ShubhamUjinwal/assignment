import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  totalLength: any;
  page: number = 1;

  constructor(private apiService: ApiService) { }
  selectedProduct!: Product;

  ngOnInit(): void {
    this.getProduct();
    this.totalLength = this.products.length;
  }
  
  getProduct() {
    this.apiService.get(100).subscribe((res: any) => {
      this.products = res;
      console.log(this.products)
    })
  }
}
