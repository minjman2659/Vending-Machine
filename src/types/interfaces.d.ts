import { ProductCategory } from "./product-categories";
import { Card, Cash } from "./types";

export interface IUser {
  products: ProductCategory;
  money: Cash | Card;
  vendingMachine: VendingMachine;
  useVendingMachine(): void;
}

export interface VendingMachine {
  work(products: ProductCategory, money: Cash | Card): void;
}
