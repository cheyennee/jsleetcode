// solution 1: time 36, memory 44
// 直接循环检查给定整数 n 的二进制位的每一位是否为 1。
// 具体代码中，当检查第 i 位时，我们可以让 n 与 2^i进行与运算，当且仅当 n 的第 i 位为 1 时，运算结果不为 0。
// 按照官方的提示写了下面的代码便于理解

var hammingWeight = function(n) {
    let ret = 0
    for(let i=0;i<32;i++)
        if((n&Math.pow(2, i))!==0)
            ret++
    return ret
};

// solution 1.1: 
// 官方使用位运算，效率比Pow高

var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};

