import { Cash, Card, ProductToBuy } from 'types/types';
import { User } from 'user';
import { VendingMachine } from 'vending-machine';
import { Coke, Water, Coffee } from 'products/drinks';
import { Cheetos, Goraebob, Chocochip } from 'products/snacks';

type Bootstrap = {
  vendingMachine: VendingMachine;
  products: ProductToBuy[];
  money: Cash | Card;
};

function bootstrap({ vendingMachine, products, money }: Bootstrap) {
  const user = new User(vendingMachine, products, money);
  user.useVendingMachine();
}

// -------------------------------------------------------------------------------

const drinksToBuy: ProductToBuy[] = [
  { name: 'coke', count: 10 },
  { name: 'water', count: 50 },
  { name: 'coffee', count: 20 },
];
const snacksToBuy: ProductToBuy[] = [
  { name: 'cheetos', count: 10 },
  { name: 'goraebob', count: 10 },
  { name: 'chocochip', count: 10 },
];

const drinkVendingMachine = new VendingMachine([
  new Coke(),
  new Water(),
  new Coffee(),
]);
const snackVendingMachine = new VendingMachine([
  new Cheetos(),
  new Goraebob(),
  new Chocochip(),
]);

const cash: Cash = {
  type: 'cash',
  amount: 61200,
};

const card: Card = {
  type: 'card',
  limit: 55000,
};

bootstrap({
  vendingMachine: drinkVendingMachine,
  products: drinksToBuy,
  money: cash,
});
console.log('Bye ~ ^^');
bootstrap({
  vendingMachine: snackVendingMachine,
  products: snacksToBuy,
  money: card,
});
console.log('Bye ~ ^^');
