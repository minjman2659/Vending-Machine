import { Drinks } from 'types/types';
import { Coke, Water, Coffee } from 'products';

function checkNumberOfDrinks(
  numberOfDrinks: Drinks,
  coke: Coke,
  water: Water,
  coffee: Coffee
) {
  let isPossible = true;
  const impossibleItems = [];

  if (numberOfDrinks['coke'] > coke.getCount()) {
    impossibleItems.push('콜라');
    isPossible = false;
  }
  if (numberOfDrinks['water'] > water.getCount()) {
    impossibleItems.push('물');
    isPossible = false;
  }
  if (numberOfDrinks['coffee'] > coffee.getCount()) {
    impossibleItems.push('커피');
    isPossible = false;
  }

  const message = isPossible
    ? 'Possible'
    : `구매 가능한 ${impossibleItems.join(',')}의 개수를 초과했습니다.`;
  return { message };
}

export default checkNumberOfDrinks;
