// solution 1: time 77.83%, memory 51.16%

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var k = 0
    var len = nums.length
    for(var i=0;i<len;i++){
        if((i!=len-1&&nums[i]!=nums[i+1]) || i==len-1){
            nums[k++] = nums[i]
        }
    }
    return k
};