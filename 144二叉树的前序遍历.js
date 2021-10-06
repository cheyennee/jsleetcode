// solution 1: time 75.16%, memory 88.12%
// 递归

var preorder = function(node, arr){
    if(!node)
        return null
    arr.push(node.val)
    preorder(node.left, arr)
    preorder(node.right, arr)
}

var preorderTraversal = function(root) {
    var res = []
    preorder(root, res)
    return res
};

// solution 2: time 99.2%, memory 75.91%
// 迭代

var preorderTraversal = function(root) {
    var res = []
    if(!root)
        return res
    var stk = []
    var node = root
    while(stk.length>0||node){
        while(node){
            res.push(node.val)
            stk.push(node)
            node = node.left
        }
        node = stk.pop()
        node = node.right
    }
    return res
};