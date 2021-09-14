// solution 1: time 90.96%, memory 39.11%

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    var len = nums.length
    for(var i=0;i<len;i++){
        if (nums[i] === target || nums[i] > target)
            return i
    }
    return len
};

// solution 2: time 90.96%, memory 87.62%
// 二分法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    var left=0, right=nums.length-1

    // 注意循环的条件，可以取等
    while(left<=right){
        // 还有整除的写法
        let middle = ~~((right-left)/2)+left
        if (nums[middle]===target)
            return middle
        else if (nums[middle]>target){
            right = middle-1
        }
        else{
            left = middle+1
        }
    }
    return left
};