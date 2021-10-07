// solution 1: time 32.95, memory 69
// 迭代

var postorderTraversal = function(root) {
    var res = []
    var stk = []
    var node = root
    // 标记右子树是否遍历完毕
    var prev = new TreeNode()
    if(!node)
        return res
    while(stk.length>0||node){
        while(node){
            stk.push(node)
            node=node.left
        }
        node = stk.pop()
        if(!node.right||node.right===prev){
            res.push(node.val)
            prev=node
            node=null
        }else{
            stk.push(node)
            node=node.right
        }
    }
    return res
};

// solution 2: time 7, memory 65
// 递归

var post = function(root, res){
    if(!root)
        return null
    post(root.left, res)
    post(root.right, res)
    res.push(root.val)
}
var postorderTraversal = function(root) {
    var res = []
    post(root, res)
    return res
};

