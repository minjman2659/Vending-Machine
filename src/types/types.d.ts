export type Cash = {
  type: 'cash';
  amount: number; // 현금의 총액
};

export type Card = {
  type: 'card';
  limit: number; // 사용 가능한 카드의 한도
};

export type Change = {
  100?: number;
  500?: number;
  1000?: number;
  5000?: number;
  10000?: number;
};

//* 자판기에 들어있는 상품
export type Product = {
  name: string;
  price: number;
  get count(): number;
  set count(newCount: number);
};

//* 자판기에서 구매하고자 하는 상품과 개수
export type ProductToBuy = {
  name: string;
  count: number;
};
