import { Cash, Card, Drinks } from 'types/types';
import { Coke, Water, Coffee } from 'products';
import {
  getNumberOfDrinks,
  checkNumberOfDrinks,
  getMoneySum,
  countChange,
} from 'service';

export class VendingMachine {
  private numberOfDrinks: Drinks;
  coke = new Coke();
  water = new Water();
  coffee = new Coffee();

  constructor(public drinks: string[], public money: Cash | Card) {}

  getNumberOfDrinks() {
    return getNumberOfDrinks(this.drinks);
  }

  checkNumberOfDrinks() {
    return checkNumberOfDrinks(
      this.numberOfDrinks,
      this.coke,
      this.water,
      this.coffee
    );
  }

  getMoneySum() {
    return getMoneySum(this.drinks, this.coke, this.water, this.coffee);
  }

  countChange(money: number) {
    return countChange(money);
  }
}
