import { VendingMachine } from 'type/interfaces';
import { Cash, Card } from 'type/types';
import { Drinks } from 'type/product-categories';
import { Coke, Water, Coffee } from 'product/drinks';
import { getMessageAndChange } from 'common';

class DrinkVendingMachine implements VendingMachine {
  private coke = new Coke();
  private water = new Water();
  private coffee = new Coffee();

  constructor(public products: Drinks, public money: Cash | Card) {}

  useVendingMachine() {
    if (!this.products) {
      throw new Error('상품을 선택해 주세요');
    }
    if (!this.money) {
      throw new Error('금액을 넣어 주세요');
    }

    const { message } = this.checkNumberOfProducts();
    if (message !== 'Possible') {
      throw new Error(message);
    }

    const { needCostSum } = this.getCostSum();

    const { returnMessage, change } = getMessageAndChange(
      this.money,
      needCostSum
    );

    //* 성공적으로 유저가 구매한 상품을 제공했기 때문에, 상품의 개수를 업데이트 해주어야 함.
    this.setProductCount();

    console.log(returnMessage);
    if (change) {
      console.log('거스름 돈 : ', change);
    }
  }

  private checkNumberOfProducts() {
    let isPossible = true;
    const impossibleItems = [];

    if (this.products.coke > this.coke.getCount()) {
      impossibleItems.push('콜라');
      isPossible = false;
    }
    if (this.products.water > this.water.getCount()) {
      impossibleItems.push('물');
      isPossible = false;
    }
    if (this.products.coffee > this.coffee.getCount()) {
      impossibleItems.push('커피');
      isPossible = false;
    }

    const message = isPossible
      ? 'Possible'
      : `구매 가능한 "${impossibleItems.join(', ')}"의 개수를 초과했습니다.`;

    return { message };
  }

  private setProductCount() {
    const newCokeCount = this.coke.getCount() - this.products.coke;
    const newWaterCount = this.water.getCount() - this.products.water;
    const newCoffeeCount = this.coffee.getCount() - this.products.coffee;
    this.coke.setCount(newCokeCount);
    this.water.setCount(newWaterCount);
    this.coffee.setCount(newCoffeeCount);
  }

  private getCostSum() {
    let needCostSum: number = 0;
    if (this.products.coke) {
      needCostSum += this.products.coke * this.coke.price;
    }
    if (this.products.water) {
      needCostSum += this.products.water * this.water.price;
    }
    if (this.products.coffee) {
      needCostSum += this.products.coffee * this.coffee.price;
    }

    return { needCostSum };
  }
}

export default DrinkVendingMachine;
