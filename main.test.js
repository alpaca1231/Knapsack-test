import { Main } from './main';

// 1以上max以下のランダムな整数
const random = (max) => Math.floor(Math.random() * max) + 1;

// ランダムな整数を定義
const n = random(100);
const W = random(10000);
const weight = random(1000);
const value = random(1000);

let items = [];
for (let i = 0; i < n; i++) {
  items.push([weight, value]);
}

const result = Main(n, W, items);

test('Knapsack test Full search', () => {
  let v = [];
  let w = [];
  for (let i = 0; i < n; i++) {
    w[i] = items[i][0];
    v[i] = items[i][1];
  }
  const rec = (i, j) => {
    let res = 0;
    if (i === n) {
      // 無限ループ防止
      res = 0;
    } else if (j < w[i]) {
      // 容量不足の場合は入れない
      res = rec(i + 1, j);
    } else {
      // 入れるか入れないか選べるので、価値の和が大きい方を選ぶ
      res = Math.max(rec(i + 1, j), rec(i + 1, j - w[i]) + v[i]);
    }
    return res;
  };
  // console.log(result);
  // console.log(rec(0, W));
  expect(result).toBe(rec(0, W));
});
