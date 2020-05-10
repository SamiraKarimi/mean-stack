// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars,
//  quarters, dimes, nickels, and pennies.
let coinChange = (n)=>{
    let coinObj = {};
    let rm =0;
    coinObj.quarters=Math.floor(n/25);
    rm=n%25;
    coinObj.dimes=Math.floor(rm/10);
    rm=rm%10;
    coinObj.niclkels =Math.floor(rm/5);
    coinObj.pennies= rm%5;
    return coinObj;
}
console.log(coinChange(192));