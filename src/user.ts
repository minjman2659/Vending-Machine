import { IUser, VendingMachine } from 'types/interfaces';
import { Cash, Card } from 'types/types';
import { ProductCategory } from './types/product-categories.d';

export class User implements IUser {
  constructor(
    public products: ProductCategory,
    public money: Cash | Card,
    public vendingMachine: VendingMachine
  ) {}

  useVendingMachine() {
    this.vendingMachine.work(this.products, this.money);
  }
}
