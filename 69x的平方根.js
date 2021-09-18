// solution 1: time 7.18%, memory 75.53%
// 穷举的时间效率太低了...

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    var half = ~~(x/2)+1
    for(var i=0;i<=half;i++)
        if(i*i===x)
            return i
        else if(i*i>x)
            return i-1
};

// solution 2: time 97.64%, memory 34.28%
// 袖珍计算器算法：实际上就是先取对数再计算，但是这种方法还不如直接使用sqrt()

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x===0)
        return 0
    var ans = ~~(Math.exp(0.5*Math.log(x)))
    // 此处是因为在计算e的时候计算结果与正确值会有误差，故在得到ans的时候应该找出ans与ans+1哪个是真正的答案
    return (ans+1)*(ans+1)<=x?(ans+1):ans
};

// solution 3: time 97.64%, memory 68.35%
// 二分法yyds
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x===0)
        return 0
    var left = 0
    var right = x
    var middle
    while(left<=right){
        middle = ~~((right-left)/2+left)
        if(middle*middle === x)
            return middle
        else if(middle*middle<x){
            left = middle+1
        }else{
            right = middle-1
        }
    }
    return right
};

// solution 4: time 93.55%, memory 76.57%
// 牛顿迭代：y=f(x)=x^2−C

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if(x===0)
        return 0
    var C=x, x0=x
    while(1){
        var xi = 0.5*(x0+C/x0)
        if(Math.abs(x0-xi)<1e-7)
            break;
        x0 = xi
    }
    return ~~(x0)
};