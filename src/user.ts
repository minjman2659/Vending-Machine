import { VendingMachine } from 'types/interfaces';
import { ProductCategory } from 'types/product-categories';
import { Card, Cash } from 'types/types';

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
