import { Cash, Card, Change } from 'types/types';
import countChange from './count-change';

function getMessageAndChange(money: Cash | Card, needCostSum: number) {
  let returnMessage: string = null;
  let change: Change = null;

  switch (money.type) {
    case 'cash':
      if (money.amount < needCostSum) {
        throw new Error(
          `현금이 ${needCostSum - money.amount}원 만큼 부족합니다`
        );
      }
      const remainMoney = money.amount - needCostSum;
      if (remainMoney === 0) {
        returnMessage =
          '금액이 딱 맞아 거스름 돈은 없습니다. 맛있게 드세요! ^^';
      } else {
        returnMessage =
          '거스름 돈을 잊지 말고 가져가시길 바랍니다. 맛있게 드세요! ^^';
        change = countChange(remainMoney);
      }
      break;
    case 'card':
      if (money.limit < needCostSum) {
        throw new Error('카드 한도를 초과합니다');
      } else {
        returnMessage = '카드를 뽑아주세요. 맛있게 드세요! ^^';
      }
      break;
  }

  return { returnMessage, change };
}

export default getMessageAndChange;
