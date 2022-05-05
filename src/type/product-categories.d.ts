export type ProductCategory = Drinks | Snacks;

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
