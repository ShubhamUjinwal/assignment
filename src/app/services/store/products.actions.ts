import { createAction } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const addProducts = createAction(
  '[Products] Add Products',
  (products: Product) => ({products})
)