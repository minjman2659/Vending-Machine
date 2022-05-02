import { Drinks } from 'types/types';

function getNumberOfDrinks(drinks: string[]) {
  const numberOfDrinks: Drinks = {};
  drinks.forEach((drink) => {
    if (drink === 'coke') {
      const cokes = numberOfDrinks['coke'] ? ++numberOfDrinks['coke'] : 1;
      numberOfDrinks['coke'] = cokes;
    }
    if (drink === 'water') {
      const waters = numberOfDrinks['water'] ? ++numberOfDrinks['water'] : 1;
      numberOfDrinks['water'] = waters;
    }
    if (drink === 'coffee') {
      const coffees = numberOfDrinks['coffee'] ? ++numberOfDrinks['coffee'] : 1;
      numberOfDrinks['coffee'] = coffees;
    }
  });
  return { numberOfDrinks };
}

export default getNumberOfDrinks;
