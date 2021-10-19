// solution 1: time 9, memory 88
// 暴力

var containsNearbyDuplicate = function(nums, k) {
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<=i+k;j++)
            if(nums[i]===nums[j])
                return true
    }
    return false
};

// solution 2: time 52, memory 60
// 这题本质是维护一个滑动窗口

var containsNearbyDuplicate = function(nums, k){
    var res = new Set()
    for(var i=0;i<nums.length;i++){
        if(res.has(nums[i]))
            return true
        res.add(nums[i])
        if(res.size>k)
            res.delete(nums[i-k])
    }
    return false
}