export type ProductCategory = Drinks | Snacks;

//* 자판기에서 구매하고자 하는 상품과 개수
export type Drinks = {
  type: 'drinks';
  coke?: number;
  water?: number;
  coffee?: number;
};

export type Snacks = {
  type: 'snacks';
  cheetos?: number;
  chocochip?: number;
  goraebob?: number;
};
