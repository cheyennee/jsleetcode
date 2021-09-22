// solution 1:超时，但是方法是合理的
// f(n)=f(n-1)+f(n-2)
// 爬到第n级台阶的方案数，考虑最后一步可能跨了一级台阶，也可能跨了两级台阶

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n===1)
        return 1
    if(n===2)
        return 2
    return climbStairs(n-1)+climbStairs(n-2)
};

// solution 2: time 53.95%, memory 38.58%
// 虽然我不懂，但我大受震撼？
// 动态规划，与解法一一致，f(n)=f(n-1)+f(n-2)，但其更考虑的是一种状态转移
// 主要是它的初始值难想到

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    var p=0, q=0, r=1
    for(var i=1;i<=n;i++){
        p=q
        q=r
        r=p+q
    }
    return r
};