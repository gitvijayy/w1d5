let total = Number(process.argv[2]);
const remaining = { bottles: total, caps: total };
const totalEarned = { bottles: 0, caps: 0 };

while (remaining.bottles >= 2 || remaining.caps >= 4) {

  redeemBottlesCaps("bottles", remaining.bottles, 2);
  redeemBottlesCaps("caps", remaining.caps, 4);
}

function redeemBottlesCaps(type, count, div) {

  let remainder = remaining[type] % div
  let redeem = (remaining[type] - remainder) / div;

  remaining[type] = redeem + remainder;
  totalEarned[type] += redeem;
  total += redeem;
  type === "caps" ? remaining["bottles"] += redeem : remaining["caps"] += redeem;


}


console.log("Total Bottles: ", total);
console.log("Total Earned: ", totalEarned)
console.log("Remaining: ", remaining);


