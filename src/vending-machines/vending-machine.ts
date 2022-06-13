import { IVendingMachine } from 'types/interfaces';
import { Cash, Card, Product, ProductToBuy } from 'types/types';
import { getMessageAndChange } from 'common';

class VendingMachine implements IVendingMachine {
  constructor(private products: Product[]) {}

  work(products: ProductToBuy[], money: Cash | Card) {
    if (!products) {
      throw new Error('구매할 상품을 선택해 주세요');
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

  private checkNumberOfProducts(products: ProductToBuy[]) {
    let isPossible = true;
    const impossibleItems = [];

    for (let product of products) {
      const foundProduct = this.products.find(
        (val) => val.name === product.name
      );
      if (!foundProduct) {
        throw new Error(`존재하지 않는 상품입니다: ${product.name}`);
      }
      if (foundProduct.count < product.count) {
        impossibleItems.push(foundProduct.name);
        isPossible = false;
      }
    }

    const message = isPossible
      ? 'Possible'
      : `구매 가능한 "${impossibleItems.join(', ')}"의 개수를 초과했습니다.`;

    return { message };
  }

  private setProductCount(products: ProductToBuy[]) {
    for (let product of products) {
      const foundProduct = this.products.find(
        (val) => val.name === product.name
      );
      if (!foundProduct) {
        throw new Error(`존재하지 않는 상품입니다: ${product.name}`);
      }
      foundProduct.count -= product.count;
    }
  }

  private getCostSum(products: ProductToBuy[]) {
    let needCostSum: number = 0;
    for (let product of products) {
      const foundProduct = this.products.find(
        (val) => val.name === product.name
      );
      if (!foundProduct) {
        throw new Error(`존재하지 않는 상품입니다: ${product.name}`);
      }
      needCostSum += product.count * foundProduct.price;
    }

    return { needCostSum };
  }
}

export default VendingMachine;
