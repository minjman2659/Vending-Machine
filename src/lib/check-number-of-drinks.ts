import { Drinks } from 'types/types';

// 모든 음료는 50개씩 들어있다고 가정
const numberOfCoke = 50;
const numberOfWater = 50;
const numberOfCoffee = 50;

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
  return { message };
}

export default checkNumberOfDrinks;
