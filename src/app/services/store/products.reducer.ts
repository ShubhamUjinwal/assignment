import { Action, createReducer, on } from "@ngrx/store";
import * as CustomerActions from './products.actions';
import { Product } from "src/app/models/product.model";

export const productsFeatureKey = 'products';

// Ngrx store interface
export interface ProductsState {
  products: Product[];
}

// Initial Value
export const initialProductState: ProductsState = {
  products: []
}

export const productsReducer = createReducer( 
  initialProductState,
  on(CustomerActions.addProducts, (state: ProductsState, {products}) => ({
    ...state,
    products: state.products.concat(products)
  })
))


export function reducer(state: ProductsState | undefined, action: Action): any {
  return productsReducer(state,action);
}