import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() productSelected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.productSelected.emit(this.product);
  }

}
