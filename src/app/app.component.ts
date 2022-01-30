import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { ApiService } from './services/api.service';
import { addProducts } from './services/store/products.actions';
import { ProductsState } from './services/store/products.reducer';
import { selectProducts } from './services/store/products.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products$!: Observable<Product[]>;

  constructor(private store: Store<ProductsState>, private apiService: ApiService) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit() {
    // this.getProduct();
  }

  getProduct() {
    this.apiService.get(50).subscribe((res: any) => {
      this.store.dispatch(addProducts(res));
    })
  }
}
