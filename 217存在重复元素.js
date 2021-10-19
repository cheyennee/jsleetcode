// solution 1: time 36, memory 8

var containsDuplicate = function(nums) {
    var arr = {}
    for(var i=0;i<nums.length;i++){
        if(arr.hasOwnProperty(nums[i]))
            return true
        arr[nums[i]]=1
    }
    return false
};

// solution 2: time 21, memory 68
// 排序

var containsDuplicate = function(nums){
    nums.sort((a, b)=>a-b)
    const n = nums.length
    for(let i=0;i<n-1;i++)
        if(nums[i]===nums[i+1])
            return true
    return false
}