// solution 1: time 97.39%, memory 58.48%
// 递归

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    var res = []
    const inorder = (root)=>{
        if(!root)
            return;
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root);
    return res
};

// solution 2:time 78.06%, memory 75.75%
// 迭代

var inorderTraversal = function(root) {
    const res = []
    const stk = []
    while(root||stk.length){
        while(root){
            stk.push(root)
            root = root.left
        }
        root = stk.pop()
        res.push(root.val)
        root = root.right
    }
    return res
};
