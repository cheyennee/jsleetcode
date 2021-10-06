// solution 1: time 62.76%, memory 85.56%
// 快慢指针

var hasCycle = function(head) {
    // 此处卡在[]这个用例上了
    if(!head||!head.next)
        return false
    var low = head
    var high = head
    while(high){
        low = low.next
        // 此处卡在high.next为空的情况
        if(!high.next)
            return false
        high = high.next.next
        if(low===high)
            return true
    }
    return false
};