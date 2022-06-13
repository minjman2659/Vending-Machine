import { IUser, IVendingMachine } from 'types/interfaces';
import { Cash, Card, ProductToBuy } from 'types/types';

export class User implements IUser {
  constructor(
    public vendingMachine: IVendingMachine,
    public products: ProductToBuy[],
    public money: Cash | Card
  ) {}

  useVendingMachine() {
    this.vendingMachine.work(this.products, this.money);
  }
}
