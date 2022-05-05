import { Product } from 'type/interfaces';

export class Coke implements Product {
  name = 'coke';
  price = 1100;
  private count = 50;
  getCount() {
    return this.count;
  }
  setCount(newCount: number) {
    this.count = newCount;
  }
}

export class Water implements Product {
  name = 'water';
  price = 600;
  private count = 50;
  getCount() {
    return this.count;
  }
  setCount(newCount: number) {
    this.count = newCount;
  }
}

export class Coffee implements Product {
  name = 'coffee';
  price = 700;
  private count = 50;
  getCount() {
    return this.count;
  }
  setCount(newCount: number) {
    this.count = newCount;
  }
}
