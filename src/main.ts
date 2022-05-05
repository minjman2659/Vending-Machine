import { VendingMachine } from 'type/interfaces';
import { ProductCategory } from 'type/product-categories';
import { Cash, Card } from 'type/types';

import { DrinkVendingMachine } from 'vending-machine';
import { User } from 'user';

function bootstrap(products: ProductCategory, money: Cash | Card) {
  let vendingMachine: VendingMachine = null;
  if (products.type === 'drinks') {
    vendingMachine = new DrinkVendingMachine(products, money);
  }

  const user = new User(products, money, vendingMachine);

  user.useVendingMachine();
}

// -------------------------------------------------------------------------------

const products: ProductCategory = {
  type: 'drinks',
  coke: 10,
  water: 50,
  coffee: 20,
};

const cash: Cash = {
  type: 'cash',
  amount: 31600,
};

const card: Card = {
  type: 'card',
  limit: 100000,
};

bootstrap(products, card);
console.log('Bye ~ ^^');
