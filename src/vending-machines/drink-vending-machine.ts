import { VendingMachine } from 'types/interfaces';
import { Cash, Card } from 'types/types';
import { Drinks } from 'types/product-categories';
import { Coke, Water, Coffee } from 'products/drinks';
import { getMessageAndChange } from 'common';

class DrinkVendingMachine implements VendingMachine {
  private coke = new Coke();
  private water = new Water();
  private coffee = new Coffee();

  work(products: Drinks, money: Cash | Card) {
    if (!products) {
      throw new Error('상품을 선택해 주세요');
    }
    if (!money) {
      throw new Error('금액을 넣어 주세요');
    }

    const { message } = this.checkNumberOfProducts(products);
    if (message !== 'Possible') {
      throw new Error(message);
    }

    const { needCostSum } = this.getCostSum(products);

    const { returnMessage, change } = getMessageAndChange(money, needCostSum);

    //* 성공적으로 유저가 구매한 상품을 제공했기 때문에, 상품의 개수를 업데이트 해주어야 함.
    this.setProductCount(products);

    console.log(returnMessage);
    if (change) {
      console.log('거스름 돈 : ', change);
    }
  }

  private checkNumberOfProducts(products: Drinks) {
    let isPossible = true;
    const impossibleItems = [];

    if (products.coke > this.coke.count) {
      impossibleItems.push('콜라');
      isPossible = false;
    }
    if (products.water > this.water.count) {
      impossibleItems.push('물');
      isPossible = false;
    }
    if (products.coffee > this.coffee.count) {
      impossibleItems.push('커피');
      isPossible = false;
    }

    const message = isPossible
      ? 'Possible'
      : `구매 가능한 "${impossibleItems.join(', ')}"의 개수를 초과했습니다.`;

    return { message };
  }

  private setProductCount(products: Drinks) {
    const newCokeCount = this.coke.count - products.coke;
    const newWaterCount = this.water.count - products.water;
    const newCoffeeCount = this.coffee.count - products.coffee;
    this.coke.count = newCokeCount;
    this.water.count = newWaterCount;
    this.coffee.count = newCoffeeCount;
  }

  private getCostSum(products: Drinks) {
    let needCostSum: number = 0;
    if (products.coke) {
      needCostSum += products.coke * this.coke.price;
    }
    if (products.water) {
      needCostSum += products.water * this.water.price;
    }
    if (products.coffee) {
      needCostSum += products.coffee * this.coffee.price;
    }

    return { needCostSum };
  }
}

export default DrinkVendingMachine;
