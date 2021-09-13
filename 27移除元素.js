// solution 1: time 98.48%, memory 58.44%

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    var k = 0
    var len = nums.length
    for(var i=0;i<len;i++)
        if(nums[i]!=val)
            nums[k++]=nums[i]
    return k
};

// solution 2: time 68.66%, memory 29.83%
// 双指针优化,没想到时间和效率这么低？
// 优化为为了防止[1,2,3,4],val=1，这种情况下，需要将后面的元素均往前移，降低了效率
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    var len = nums.length
    var k = len-1
    var i = 0
    for(i=0;i<=k;i++){
        if(nums[i]==val){
            nums[i]=nums[k--]
            i--
        }
    }
    return i
};
