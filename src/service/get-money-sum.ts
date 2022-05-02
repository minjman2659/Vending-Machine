import { Coke, Water, Coffee } from 'products';

function getMoneySum(
  drinks: string[],
  coke: Coke,
  water: Water,
  coffee: Coffee
) {
  let needMoneySum = 0;
  drinks.forEach((drink) => {
    if (drink === 'coke') {
      needMoneySum += coke.price;
    }
    if (drink === 'water') {
      needMoneySum += water.price;
    }
    if (drink === 'coffee') {
      needMoneySum += coffee.price;
    }
  });
  return { needMoneySum };
}

export default getMoneySum;
