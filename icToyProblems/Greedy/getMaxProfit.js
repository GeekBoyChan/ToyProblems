let getMaxProfit = (stockPrices) => {
  // Calculate the max profit
  if (stockPrices.length < 2) {
    throw new Error('Must require at least 2 prices');
  }

  let cheapestStock = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let currentStock = stockPrices[i];
    let currentProfit = currentStock - cheapestStock;

    maxProfit = Math.max(maxProfit, currentProfit);

    cheapestStock = Math.min(cheapestStock, currentStock);
  }

  return maxProfit;
};
