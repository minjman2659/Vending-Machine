export type Drinks = {
  coke?: number;
  water?: number;
  coffee?: number;
};

export type Cash = {
  type: 'cash';
  amount: number; // 현금의 총액
};

export type Card = {
  type: 'card';
  limit: number; // 사용 가능한 카드의 한도
};

export type Result = {
  numberOfDrinks: Drinks;
  change?: any;
};
