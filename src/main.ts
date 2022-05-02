import { Card, Cash } from 'types/types';

function bootstrap(drinks: string[], money: Cash | Card) {
  if (!money) {
    throw new Error('금액을 넣어 주세요');
  }

  if (!drinks) {
    throw new Error('마실 음료를 선택해 주세요');
  }
}

bootstrap(['coke', 'water', 'water', 'coffee'], { type: 'card', limit: 5000 });
