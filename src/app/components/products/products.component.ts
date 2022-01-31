import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/models/product.model';
import { select, Store } from '@ngrx/store';
import { ProductsState } from 'src/app/services/store/products.reducer';
import { selectProducts } from 'src/app/services/store/products.selector';
import { Observable, tap } from 'rxjs';
import { addProducts } from 'src/app/services/store/products.actions';
import { __values } from 'tslib';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  totalLength: any;
  page: number = 1;

  constructor(private apiService: ApiService, private store: Store<ProductsState>) {
    this.products$ = this.store.pipe(select(selectProducts))
  }

  selectedProduct!: Product;

  ngOnInit(): void {
    this.getProduct();
    this.totalLength = this.products$.subscribe((data) => this.totalLength = data.length)
  }
  
  getProduct() {
    this.apiService.get(50).subscribe((res: any) => {
      this.store.dispatch(addProducts(res));
    })
  }
}
