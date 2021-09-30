// solution 1: 超时
// 暴力

var maxProfit = function(prices) {
    var maxVal = 0
    for(var i=1;i<prices.length;i++){
        for(var j=0;j<i;j++)
            if(prices[i]-prices[j]>maxVal)
                maxVal = prices[i]-prices[j]
    }
    return maxVal
};

// solution 2: time 87.74%, memory 15.08%
// 动态规划
// dp[i][0]：规定了今天不持股，有以下两种情况：
// 昨天不持股，今天什么都不做；
// 昨天持股，今天卖出股票（现金数增加），

// dp[i][1]：规定了今天持股，有以下两种情况：
// 昨天持股，今天什么都不做（现金数与昨天一样）；
// 昨天不持股，今天买入股票（注意：只允许交易一次，因此手上的现金数就是当天的股价的相反数）。

var maxProfit = function(prices) {
    var len = prices.length
    if(len<2)
        return 0
    var dp = new Array(len).fill([0, 0])
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for(var i=1;i<len;i++){
        dp[i][0]=Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
        // 只允许交易一次，因此手上的现金数就是当天的股价的相反数
        dp[i][1]=Math.max(dp[i-1][1], -prices[i])
    }
    return dp[len-1][0]
};