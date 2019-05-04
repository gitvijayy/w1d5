function maxProfit(stockPrice) {
var price = [];
var profit = [];

for(var i = 0; i < stockPrice.length; i++) {
  for(var j = i + 1; j < stockPrice.length; j++) {

    price.push([stockPrice[i],stockPrice[j]]);
    profit.push(Number(stockPrice[j] - stockPrice[i]));
  };
};

var prices = price[profit.indexOf(Math.max(...profit))];
return Math.max(...profit) > 0 ?
"If you buy at $" + prices[0] + " and sell at $" + prices[1] +
" you attain the maximum profit for the day: $" + (prices[1] - prices[0])
: -1;

}
