import { Product } from 'types/types';

export class Cheetos implements Product {
  name = 'cheetos';
  price = 1500;
  private _count = 50;
  get count() {
    return this._count;
  }
  set count(newCount: number) {
    this._count = newCount;
  }
}

export class Goraebob implements Product {
  name = 'goraebob';
  price = 1000;
  private _count = 50;
  get count() {
    return this._count;
  }
  set count(newCount: number) {
    this._count = newCount;
  }
}

export class Chocochip implements Product {
  name = 'chocochip';
  price = 2000;
  private _count = 50;
  get count() {
    return this._count;
  }
  set count(newCount: number) {
    this._count = newCount;
  }
}
