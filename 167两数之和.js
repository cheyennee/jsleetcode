// solution 1: time 84, memory 77
// 快慢指针

var twoSum = function(numbers, target) {
    var left = 0
    var right = numbers.length-1
    while(left<right){
        let sum=numbers[left]+numbers[right]
        if(sum===target)
            return [left+1, right+1]
        else if(sum<target)
            left++
        else
            right--
    }
};