
// 反转数字需要考虑溢出的情况，回文数一定不会溢出

// solution 1:time 83.44%, memory 62%

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0)
        return false
    var res = 0
    var temp = x
    while (x!=0){
        const digit = x%10
        x = ~~(x/10)
        res = res*10+digit
    }
    if (res === temp)
        return true
    else
        return false
};

// solution 2:time 94.51%, memory 83.73%
// 为避免反转的时候溢出，只反转一半的数字
// 怎么才能反转一半的数字呢？判断反转后的数字与当前数字的大小即可。原理是多位数比少位数的数值大。

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x<0||(x%10===0&&x!==0))
        return false
    let rev = 0
    while (x>rev){
        rev = rev*10+x%10
        x=~~(x/10)
    }
    // 在此考虑x位数的奇偶性，当奇时，反转后的部分去除一位与当前数字相同即可
    // 当偶时，反转后的部分与当前数字相同即可
    return x===rev || x===~~(rev/10)
};
