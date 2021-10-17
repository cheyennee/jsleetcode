// solution 1: time 40, memory 26
// 迭代

var removeElements = function(head, val) {
    if(!head)
        return head
    var newHead = new ListNode()
    newHead.next = head
    var pre = newHead
    while(head){
        if(head.val===val){
            pre.next=head.next
            head=head.next
        }else{
            pre=pre.next
            head=head.next
        }
    }
    return newHead.next
};

// solution 2: time 14, memory 10
// 递归

var removeElements = function(head, val) {
    if(!head)
        return head
    head.next = removeElements(head.next, val)
    return head.val===val?head.next:head
};