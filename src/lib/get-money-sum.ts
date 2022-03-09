const priceOfCoke = 1100;
const priceOfWater = 600;
const priceOfCoffee = 700;

function getMoneySum(drinks: string[]) {
  let needMoneySum = 0;
  drinks.forEach((drink) => {
    if (drink === 'coke') {
      needMoneySum += priceOfCoke;
    }
    if (drink === 'water') {
      needMoneySum += priceOfWater;
    }
    if (drink === 'coffee') {
      needMoneySum += priceOfCoffee;
    }
  });
  return { needMoneySum };
}

export default getMoneySum;
