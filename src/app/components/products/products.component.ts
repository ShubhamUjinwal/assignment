import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  lists: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    console.log(this.lists)
    this.apiService.get(10).subscribe((res: any) => {
      this.lists = res
      console.log(this.lists)
    })
  }

}
