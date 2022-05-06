import { Product } from 'types/interfaces';

export class Coke implements Product {
  name = 'coke';
  price = 1100;
  private _count = 50;
  get count() {
    return this._count;
  }
  set count(newCount: number) {
    this._count = newCount;
  }
}

export class Water implements Product {
  name = 'water';
  price = 600;
  private _count = 50;
  get count() {
    return this._count;
  }
  set count(newCount: number) {
    this._count = newCount;
  }
}

export class Coffee implements Product {
  name = 'coffee';
  price = 700;
  private _count = 50;
  get count() {
    return this._count;
  }
  set count(newCount: number) {
    this._count = newCount;
  }
}
