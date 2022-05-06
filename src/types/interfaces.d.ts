import { ProductCategory } from './product-categories';
import { Card, Cash } from './types';

export interface Product {
  name: string;
  price: number;
  get count(): number;
  set count(newCount: number);
}

export interface VendingMachine {
  products: ProductCategory;
  money: Cash | Card;
  work(): void;
}
