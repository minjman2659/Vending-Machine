import { VendingMachine } from 'types/interfaces';
import { ProductCategory } from 'types/product-categories';
import { Card, Cash } from 'types/types';
import { DrinkVendingMachine } from 'vending-machines';

export class User {
  vendingMachine: VendingMachine;
  constructor(public products: ProductCategory, public money: Cash | Card) {
    if (products.type === 'drinks')
      this.vendingMachine = new DrinkVendingMachine(products, money);
  }

  useVendingMachine() {
    this.vendingMachine.work();
  }
}
