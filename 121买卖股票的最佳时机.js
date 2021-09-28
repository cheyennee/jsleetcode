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

