import { Action, createReducer, on } from "@ngrx/store";
import * as CustomerActios from './products.actions';
import { Product } from "src/app/models/product.model";

export const productsFeatureKey = 'products';
export interface ProductsState {
  products: Product[];
}


export const initialProductState: ProductsState = {
  products: []
}

export const productsReducer = createReducer(
  initialProductState,
  on(CustomerActios.addProducts,
    (state: ProductsState, {products}) => ({
      ...state,
      products: [ ...state.products, products]
    })
    )
)

export function reducer(state: ProductsState | undefined, action: Action): any {
  return productsReducer(state,action);
}