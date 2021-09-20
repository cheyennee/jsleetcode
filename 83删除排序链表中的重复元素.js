// solution 1: time 96.55%, memory 92.6%

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(!head||!head.next)
        return head
    var p = new ListNode(), q = new ListNode()
    p = head
    q = head.next
    while(q){
        if(q.val !== p.val){
            p.next = q
            p = p.next
        }
        q = q.next
    }
    // 这一步很容易遗漏
    p.next = null
    return head
};