import { ProductCategory } from './product-categories';
import { Card, Cash, Change } from './types';

export interface Product {
  name: string;
  price: number;
  getCount: () => number;
  setCount: (newCount: number) => void;
}

export interface VendingMachine {
  products: ProductCategory;
  money: Cash | Card;
  useVendingMachine: () => void;
  checkNumberOfProducts: () => { message: string }; //* 유저가 원하는 상품의 개수를 체크해서 구매 가능한지 안한지 체크하는 메소드
  setProductCount: () => void; //* 성공적으로 상품을 제공했을 경우, 상품의 개수를 업데이트 하는 메소드
  getCostSum: () => { needCostSum: number }; //* 상품들을 구매하는데 드는 총 비용을 구하는 메소드
  countChange: (money: number) => Change; //* 총 거스름돈을 구하는 메소드
}
