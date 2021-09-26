// solution 1: time 56.09%, memory 80.68%
// 自底向上，类似后序遍历
// 先判断左右子树是否平衡，再判断以当前节点为根的子树是否平衡。如果一棵树是平衡的，那么返回其高度，否则返回-1

var check = function(root){
    if(!root)
        return 0
    var leftHeight = check(root.left)
    var rightHeight = check(root.right)
    if(leftHeight===-1||rightHeight===-1||Math.abs(leftHeight-rightHeight)>1)
        return -1
    else
        return Math.max(leftHeight, rightHeight)+1
}
var isBalanced = function(root) {
    return check(root)>=0
};

// solution 2: time 93.56%, memory 50.47%
// 自上往下，会重复计算，会找不到工作。对于同一个节点，函数height会被重复调用，导致时间复杂度较高。
// 两个函数内部均有递归

 var height = function(root){
    if(!root)
        return 0
    return Math.max(height(root.left), height(root.right))+1
}
var isBalanced = function(root) {
    if(!root)
        return true
    return Math.abs(height(root.left)-height(root.right))<=1&&isBalanced(root.left)&&isBalanced(root.right)
};