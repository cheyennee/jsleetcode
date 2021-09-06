/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution 1:time 37.81%, memory 70.46%

 var twoSum = function(nums, target) {
    var brr = []
    for (var i=0;i<nums.length;i++){
        for (var j=i+1;j<nums.length;j++){
            if (nums[i]+nums[j]===target){
                brr[0]=j;
                brr[1]=i;
            }
        }
    }
    return brr
};

// solution 2:time 94.32% memory 41.24%
// hash
// 对于每个x，先检查target-x是否在表中，如果在则返回，如果不在则将x加入表中
// 我主要想不到加入的是x

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
 var twoSum = function(nums, target) {
    var obj = {}
    for(var i=0;i<nums.length;i++){
        var a=nums[i]
        var b=target-a
        if(obj[b]!==undefined)
            return [obj[b],i]
        obj[a]=i
    }
};