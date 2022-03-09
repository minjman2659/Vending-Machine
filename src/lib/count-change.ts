function countChange(remainMoney: number) {
  const moneyTypes = [10000, 5000, 1000, 500, 100];
  const change: any = {};

  for (let money of moneyTypes) {
    if (remainMoney === 0) break;
    const count = Math.floor(remainMoney / money);
    if (count === 0) continue;
    change[`${money}원`] = count;
    remainMoney -= money * count;
  }
  return { change };
}

export default countChange;
