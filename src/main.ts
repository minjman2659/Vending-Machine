import { VendingMachine } from 'types/interfaces';
import { ProductCategory } from 'types/product-categories';
import { Cash, Card } from 'types/types';
import { User } from 'user';
import { DrinkVendingMachine } from 'vending-machines';

function bootstrap(products: ProductCategory, money: Cash | Card) {
  let vendingMachine: VendingMachine = null;
  if (products.type === 'drinks') {
    vendingMachine = new DrinkVendingMachine();
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
  amount: 61200,
};

const card: Card = {
  type: 'card',
  limit: 55000,
};

bootstrap(products, cash);
console.log('Bye ~ ^^');
bootstrap(products, card);
console.log('Bye ~ ^^');
