// solution 1: time 32.75%, memory 33.56%
// 先排序后遍历

var singleNumber = function(nums) {
    nums.sort()
    var i=0
    while(i<nums.length){
        if(nums[i]===nums[i+1])
            i+=2
        else
            return nums[i]
    }
};

// solution 2: time 93.05%, memory 84.72%
// 异或运算：有三条性质
// 1. 任何数和0做异或运算，结果仍然是原来的数
// 2. 任何数和其自身做异或运算，结果是 0
// 3. 异或运算满足交换律和结合律

var singleNumber = function(nums) {
    var res = 0
    for(var i=0;i<nums.length;i++)
        res = res ^ nums[i]
    return res
};