/**
 *
 * Best Time to Buy and Sell Stock (LeetCode 121)
 *
 * You are given an array prices where prices[i] is the price of a given
 * stock on the $i^{th}$ day.
 * You want to maximize your profit by choosing a single day to buy
 * one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 *
 * If you cannot achieve any profit, return 0.
 *
 * Constraints:1 <= prices.length <= 10^50 <= prices[i] <= 10^4
 *
 */

//1. Function declaration
const maxProfit = (prices: number[]): number => {
  //2. Establish our baseline purchase price using the first day's stock price.
  let minPrice: number = prices[0]!;

  //3. Initialize our all-time high profit tracker at 0.
  let maxProfit: number = 0;

  //4. Start iterating from the second day (index 1)
  //comparing the first day to itself yields not transaction or profit.
  for (let i = 1; i < prices.length; i++) {
    //5. Cache the stock price of the current day being processed by the loop.
    const currentPrice: number = prices[i];

    //6. Check if today's price is cheaper than the lowest historical price
    if (currentPrice < minPrice) {
      //7. If it is cheaper, we update our minimum baseline. We buy here instead.
      minPrice = currentPrice;

      //8. If today's price is higher, means we can try to sell today.
    } else {
      //9. Calculate how much money we would like to make. Today's price
      //minus our lowest past purchase price.
      const potentialProfit: number = currentPrice - minPrice;

      //10. Check if this current transaction breaks our previous all-time high profit
      if (potentialProfit > maxProfit) {
        //1. If it sets a new record, update our maximum profit tracker
        //with this value.
        maxProfit = potentialProfit;
      }
    }
  }

  //12. After checking every single day, return the absolute highest profit accumulated
  return maxProfit;
};

const marketPrices: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(marketPrices));
