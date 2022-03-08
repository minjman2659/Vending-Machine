const priceOfCoke = 1100;
const priceOfWater = 600;
const priceOfCoffee = 700;

// 모든 음료는 50개씩 들어있다고 가정
let numberOfCoke = 50;
let numberOfWater = 50;
let numberOfCoffee = 50;

type Change = {
  '100원'?: number;
  '500원'?: number;
  '1000원'?: number;
  '5000원'?: number;
  '10000원'?: number;
};

type Drinks = {
  coke?: number;
  water?: number;
  coffee?: number;
};

type Cash = {
  type: 'cash';
  amount: number; // 현금의 총액
};

type Card = {
  type: 'card';
  limit: number; // 사용 가능한 카드 금액
};

function vendingMachine(drinks: string[], money: Cash | Card) {
  if (!money) {
    throw new Error('금액을 넣어 주십시오');
  }

  const { numberOfDrinks, needMoneySum } = getMoneySumAndNumberOfDrinks(drinks);
  const message = checkNumberOfDrinks(numberOfDrinks);
  if (message !== 'Possible') {
    throw new Error(message);
  }

  let result: any;
  let error = null;
  switch (money.type) {
    case 'cash':
      if (needMoneySum > money.amount) {
        error = '현금이 부족합니다.';
      } else {
        const remainMoney = money.amount - needMoneySum;
        const change = countChange(remainMoney);
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


// -------------------------------------------------------- modules
function getMoneySumAndNumberOfDrinks(drinks: string[]) {
  const numberOfDrinks: Drinks = {};
  let needMoneySum = 0;
  drinks.forEach((drink) => {
    if (drink === 'coke') {
      const cokes = numberOfDrinks['coke'] ? ++numberOfDrinks['coke'] : 1;
      numberOfDrinks['coke'] = cokes;
      needMoneySum += priceOfCoke;
    }
    if (drink === 'water') {
      const waters = numberOfDrinks['water'] ? ++numberOfDrinks['water'] : 1;
      numberOfDrinks['water'] = waters;
      needMoneySum += priceOfWater;
    }
    if (drink === 'coffee') {
      const coffees = numberOfDrinks['coffee'] ? ++numberOfDrinks['coffee'] : 1;
      numberOfDrinks['coffee'] = coffees;
      needMoneySum += priceOfCoffee;
    }
  });
  return { numberOfDrinks, needMoneySum };
}

function checkNumberOfDrinks(numberOfDrinks: Drinks) {
  let isPossible = true;
  const impossibleItems = [];

  if (numberOfDrinks['coke'] > numberOfCoke) {
    impossibleItems.push('콜라');
    isPossible = false;
  }
  if (numberOfDrinks['water'] > numberOfWater) {
    impossibleItems.push('물');
    isPossible = false;
  }
  if (numberOfDrinks['coffee'] > numberOfCoffee) {
    impossibleItems.push('커피');
    isPossible = false;
  }

  const message = isPossible
    ? 'Possible'
    : `구매 가능한 ${impossibleItems.join(',')}의 개수를 초과했습니다.`;
  return message;
}

function countChange(remainMoney: number) {
  const moneyTypes = [10000, 5000, 1000, 500, 100];
  const change: Change = {};

  for (let i = 0; i < moneyTypes.length; i++) {
    if (remainMoney === 0) break;
    let count = Math.floor(remainMoney / moneyTypes[i]);
    remainMoney -= moneyTypes[i] * count;
    if (count === 0) continue;
    change[`${moneyTypes[i]}원`] = count;
  }
  return change;
}
