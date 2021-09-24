// solution 1: time 96.21%, memory 54.62%
// 递归

var binaryTree = function(left, right, nums){
    if(left>right)
        return null
    var mid = ~~((right-left)/2)+left
    var root = new TreeNode(nums[mid])
    root.left = binaryTree(left, mid-1, nums)
    root.right = binaryTree(mid+1, right, nums)
    return root
}

var sortedArrayToBST = function(nums) {
    return binaryTree(0, nums.length-1, nums)
};

