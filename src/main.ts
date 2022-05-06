import { ProductCategory } from 'types/product-categories';
import { Cash, Card } from 'types/types';
import { User } from 'user';

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
  limit: 100000,
};

// -------------------------------------------------------------------------------

const user = new User(products, cash);

user.useVendingMachine();
console.log('Bye ~ ^^');
