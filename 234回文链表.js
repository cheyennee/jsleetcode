// solution 1: time 62, memory 27
// 反转链表
// 这边只需反转一半的链表即可。我刚开始把整个链表都反转了，想着跟原链表相比较，但事实上，在反转链表的时候已经修改了链表

 var reverList = function(head){
    var pre = null
    var cur = head
    while(cur){
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
var endOfFirstHalf = function(head){
    var slow = head
    var fast = head
    while(fast.next&&fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
var isPalindrome = function(head) {
    if(!head)
        return true
    const firstHalfEnd = endOfFirstHalf(head)
    const secondHalfStart = reverList(firstHalfEnd.next)
    var p1 = head
    var p2 = secondHalfStart
    var res = true
    while(res&&p2){
        if(p1.val!==p2.val)
            res = false
        p1 = p1.next
        p2 = p2.next
    }
    firstHalfEnd.next = reverList(secondHalfStart)
    return res
};


// solution 2:
// 将链表转换为数组，而后使用快慢指针