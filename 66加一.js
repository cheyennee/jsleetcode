// solution 1: time 66.27%, memory 5.07%
// 应该是由于频繁的前插入操作使得效率这么低

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    var len = digits.length
    var arr = []
    var c = 1
    for(var i=len-1;i>=0;i--){
        if(digits[i]+c===10){
            c=1
            arr=[0, ...arr]
        }else{
            arr=[digits[i]+c, ...arr]
            c=0
        }
    }
    // 这是要注意的额外情况，[9]
    if (c===1)
        arr=[1, ...arr]
    return arr
};

// solution 2: time 66.27%, memory 87.16%
// 将解法一进行改进，先正序后插，最后反转

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    var len = digits.length
    var len2 = 0
    var arr = []
    var c = 1
    for(var i=len-1;i>=0;i--){
        if(digits[i]+c===10){
            c=1
            arr[len2++]=0
        }else{
            arr[len2++]=digits[i]+c
            c=0
        }
    }
    if(c===1)
        arr[len2]=1
    return arr.reverse()
};

// solution 3: time 99.74%, memory 69.74%
// 题解中抄的，太秀了，这个题解太妙了
// 但是我觉得这个[...]操作是不是太耗时了

var plusOne = function(digits) {
    for(var i=digits.length;i>=0;i--){
        digits[i]++
        digits[i]=digits[i]%10
        if(digits[i]!==0) return digits
    }
    digits=[1, ...digits]
    return digits
};