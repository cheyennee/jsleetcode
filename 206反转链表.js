// solution 1: time 55, memory 36
// 迭代

var reverseList = function(head) {
    var prev=null
    var curr=head
    while(curr){
        const next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    return prev
};

// solution 2: time 7, memory 12
// 递归: 先递后归

var reverseList = function(head) {
    if(!head||!head.next)
        return head
    // 递的过程
    const newHead=reverseList(head.next)
    // 归的过程
    head.next.next=head
    head.next=null
    // 把递归的结果返回
    return newHead
};