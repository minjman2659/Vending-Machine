import { Change } from 'types/types';

function countChange(remainMoney: number) {
  const moneyTypes = [10000, 5000, 1000, 500, 100];
  const change: Change = {};

  for (let money of moneyTypes) {
    const count = Math.floor(remainMoney / money);
    if (count === 0) continue;

    switch (money) {
      case 10000:
        change[10000] = count;
        break;
      case 5000:
        change[5000] = count;
        break;
      case 1000:
        change[1000] = count;
        break;
      case 500:
        change[500] = count;
        break;
      case 100:
        change[100] = count;
        break;
    }

    remainMoney -= money * count;
  }

  return change;
}

export default countChange;
