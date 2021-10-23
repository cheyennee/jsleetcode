// solution 1: time 83, memory 39
// 很明显是双指针问题

var summaryRanges = function(nums) {
    if(!nums)
        return nums
    var res = []
    var len=nums.length
    var i=0, j=0
    while(j<len){
        if(nums[j]+1===nums[j+1])
            j++
        else{
            if(nums[i]!=nums[j]){
                res.push(nums[i]+"->"+nums[j])
            }else{
                res.push(nums[i]+"")
            }
            j++
            i=j
        }
    }
    return res
};