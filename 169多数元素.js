// 题目的本质在于找众数

// solution 1: time 47, memory 73
// hash

var majorityElement = function(nums) {
    var timesMap = new Map()
    var max = 0
    var maxNum = 0
    for(let i=0;i<nums.length;i++){
        let temp = nums[i]
        if(timesMap.hasOwnProperty(temp)){
            timesMap[temp]++
        }else{
            timesMap[temp]=1
        }
        if(timesMap[temp]>max){
            max=timesMap[temp]
            maxNum=temp
        }
    }
    return maxNum
};

// solution 2: time 65, memory 22
// 依题意可得，对数组进行排序后,第n/2下取整个元素必然是众数

var majorityElement = function(nums) {
    nums.sort()
    return nums[~~(nums.length/2)]
};

// solution 3: time 65, memory 67
// 分治法
// 如果数 a 是数组 nums 的众数，如果我们将 nums 分成两部分，那么 a 必定是至少一部分的众数。

var count_in_range = function(nums, target, lo, hi){
    let count=0
    for(let i=lo;i<=hi;i++)
        if(nums[i]===target)
            count++
    return count
}
var majority_element_rec = function(nums, lo, hi){
    if(lo===hi)
        // 如果左右相等，那么说明这个数是次数最大值的那个数
        return nums[lo]
    let mid = ~~((lo+hi)/2)
    let left_majority=majority_element_rec(nums, lo, mid)
    let right_majority=majority_element_rec(nums,mid+1,hi)
    if(count_in_range(nums, left_majority, lo, hi)>~~((hi-lo+1)/2))
        return left_majority
    if(count_in_range(nums, right_majority, lo, hi)>~~((hi-lo+1)/2))
        return right_majority
    return -1
}
var majorityElement = function(nums) {
    return majority_element_rec(nums, 0, nums.length-1)
};