
// solution 1:time 99.38%, memory 86.52%

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let rev = 0
    while(x){
        const digit = x%10
        // 注意在js中 / 不为整除，与数学中除法一样
        // 使用~~可以得到整除后的结果
        x=~~(x/10)
        rev = rev*10+digit
        if(rev<Math.pow(-2,31)||rev>Math.pow(2,31)-1)
            return 0
    }
    return rev
};