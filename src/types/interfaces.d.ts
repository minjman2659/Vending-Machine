import { Card, Cash, ProductToBuy } from './types';

export interface IUser {
  vendingMachine: IVendingMachine;
  products: ProductToBuy[];
  money: Cash | Card;
  useVendingMachine(): void;
}

export interface IVendingMachine {
  work(products: ProductToBuy[], money: Cash | Card): void;
}
