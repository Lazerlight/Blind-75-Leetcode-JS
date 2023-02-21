/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */

// My Solution: 

var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let sellPrice = 0;

  for (let day = 1; day < prices.length; day++) {
    let dailyPrice = prices[day];

    if (dailyPrice < buyPrice) {
      buyPrice = dailyPrice;
    } else {
      let potentialProfit = dailyPrice - buyPrice;
      if (potentialProfit > sellPrice) {
        sellPrice = potentialProfit;
      }
    }
  }

  return sellPrice;
};
