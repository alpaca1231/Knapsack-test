export const Main = (n, W, items) => {
  let w = [];
  let v = [];
  let dp = [];

  // dpの初期状態: dp[0][w] = 0
  dp[0] = Array(W + 1).fill(0);

  for (let i = 0; i < n; i++) {
    // itemsを分割して配列に入れる
    w[i] = items[i][0];
    v[i] = items[i][1];

    if (!dp[i + 1]) dp[i + 1] = Array(W + 1).fill(0);

    for (let j = 0; j <= W; j++) {
      if (w[i] <= j) {
        dp[i + 1][j] = Math.max(dp[i][j - w[i]] + v[i], dp[i][j]);
      } else {
        dp[i + 1][j] = dp[i][j];
      }
    }
  }
  return dp[n][W];
};

// console.log(Main(n, W, items));
