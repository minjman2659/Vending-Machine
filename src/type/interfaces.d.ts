import { ProductCategory } from './product-categories';
import { Card, Cash, Change } from './types';

export interface Product {
  name: string;
  price: number;
  getCount: () => number;
  setCount: (newCount: number) => void;
}

export interface VendingMachine {
  products: ProductCategory;
  money: Cash | Card;
  work: () => void;
}
