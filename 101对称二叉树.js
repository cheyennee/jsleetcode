// solution 1: time 92.2%, memory 40.78%

var check = function(tree1, tree2){
    if(!tree1&&!tree2)
        return true
    else if(!tree1||!tree2)
        return false
    else
        return tree1.val===tree2.val&&check(tree1.left, tree2.right)&&check(tree1.right, tree2.left)
}
var isSymmetric = function(root) {
    return check(root.left, root.right)
};

// solution 2: time 50.8%, memory 81%
// 迭代

var check = function(tree1, tree2){
    var queue = []
    queue.push(tree1)
    queue.push(tree2)
    while(queue.length>0){
        var p = queue.shift()
        var q = queue.shift()
        if(!p&&!q)
            continue
        if(!p||!q||p.val!==q.val)
            return false
        queue.push(p.left)
        queue.push(q.right)
        queue.push(p.right)
        queue.push(q.left)
    }
    return true
}
var isSymmetric = function(root) {
    return check(root.left, root.right)
};