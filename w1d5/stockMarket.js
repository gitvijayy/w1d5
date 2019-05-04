function maxProfit(stockPrice) {
var arr = [];
var arr2 = [];

for(var i = 0; i < stockPrice.length; i++) {
  for(var j = i + 1; j < stockPrice.length; j++) {

    arr.push([stockPrice[i],stockPrice[j]]);
    arr2.push(Number(stockPrice[j] - stockPrice[i]));
  };
};

var prices = arr[arr2.indexOf(Math.max(...arr2))];
return Math.max(...arr2) > 0 ?
"If you buy at $" + prices[0] + " and sell at $" + prices[1] +
" you attain the maximum profit for the day: $" + (prices[1] - prices[0])
: -1;

}


console.log(maxProfit([45,44,31,4,3,2]));