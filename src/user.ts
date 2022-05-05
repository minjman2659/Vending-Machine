import { VendingMachine } from 'type/interfaces';
import { ProductCategory } from 'type/product-categories';
import { Card, Cash } from 'type/types';

export class User {
  constructor(
    public products: ProductCategory,
    public money: Cash | Card,
    public vendingMachine: VendingMachine
  ) {}

  useVendingMachine() {
    this.vendingMachine.work();
  }
}
