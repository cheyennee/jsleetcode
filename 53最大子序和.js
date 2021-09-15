// solution 1: time 92.96%, memory 73.84%

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var res=0, maxNum=nums[0]
    nums.map((item)=>{
        //如果自己加上前面的数还小于自己，那么就舍弃前面的数，只要自己
        //每个数都希望传来的是正数，如果是负数则反而会将自己变小
        res = Math.max(res+item, item)
        maxNum = Math.max(maxNum, res)
    })
    return maxNum
};

// solution 2: time 40.36%, memory 5.05%
// 分治法

// isum表示[l, r]的区间和
// lsum表示[l, r]内以l为左端点的最大子段长
// rsum表示[l, r]内以r为右端点的最大子段长。设置这个变量是因为最长子序和从数组左边往右边算和从右边往左边算是一样的这个原因嘛？
// msum表示[l, r]内最大子段和
function Status(l, r, m, i){
    this.lSum = l
    this.rSum = r
    this.mSum = m
    this.iSum = i
} 
const pushUp = (l, r)=>{
    const iSum = l.iSum + r.iSum
    const lSum = Math.max(l.lSum, l.iSum+r.lSum)
    const rSum = Math.max(r.rSum, l.rSum+r.iSum)
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum+r.lSum)
    return new Status(lSum, rSum, mSum, iSum)
}
const getInfo = (a, l, r)=>{
    if (l===r)
        return new Status(a[l], a[l], a[l], a[l])
    const m=(l+r)>>1
    const lSub = getInfo(a, l, m)
    const rSub = getInfo(a, m+1, r)
    return pushUp(lSub, rSub)
}
var maxSubArray = function(nums) {
    return getInfo(nums, 0, nums.length-1).mSum
};