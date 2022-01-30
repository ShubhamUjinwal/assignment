import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProducts from './products.reducer';

export const selectProductsState = createFeatureSelector<fromProducts.ProductsState>(
  fromProducts.productsFeatureKey,
);

export const selectProducts = createSelector(
  selectProductsState,
  (state: fromProducts.ProductsState) => state.products
)