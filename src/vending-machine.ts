import { Cash, Card, Result } from 'types/types';
import {
  checkNumberOfDrinks,
  getMoneySum,
  getNumberOfDrinks,
  countChange,
} from 'lib';

function vendingMachine(drinks: string[], money: Cash | Card) {
  if (!money) {
    throw new Error('금액을 넣어 주십시오');
  }

  const { numberOfDrinks } = getNumberOfDrinks(drinks);
  const { needMoneySum } = getMoneySum(drinks);

  const { message } = checkNumberOfDrinks(numberOfDrinks);
  if (message !== 'Possible') {
    throw new Error(message);
  }

  let result: Result;
  let error = null;
  switch (money.type) {
    case 'cash':
      if (needMoneySum > money.amount) {
        error = '현금이 부족합니다.';
      } else {
        const remainMoney = money.amount - needMoneySum;
        const { change } = countChange(remainMoney);
        result = { numberOfDrinks, change };
      }
      break;
    case 'card':
      if (needMoneySum > money.limit) {
        error = '카드 한도를 초과합니다.';
      } else {
        result = { numberOfDrinks };
      }
      break;
  }

  if (error) throw new Error(error);

  return result;
}

export default vendingMachine;
