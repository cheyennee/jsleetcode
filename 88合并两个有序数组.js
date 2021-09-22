// solution 1: time 63.73%, memory 79.45%
// 从后开始排序

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    var index = m+n-1
    var i=m-1, j=n-1
    // 这个条件不能只写i&&j，当m或者n为0时，执行上一步操作进入循环就会有问题
    while(i>=0&&j>=0){
        if(nums1[i]>nums2[j]){
            nums1[index--]=nums1[i]
            i--
        }else{
            nums1[index--]=nums2[j]
            j--
        }
    }
    if(i>=0){
        while(i>=0){
            nums1[index--]=nums1[i]
            i--
        }
    }else{
        while(j>=0){
            nums1[index--]=nums2[j]
            j--
        }
    }
};

// solution 2: time 92.16%, memory 53.97%
// 将nums2放入nums1尾部，然后直接对整个数组进行排序

var merge = function(nums1, m, nums2, n){
    // 在m位置，删除nums1.length-m个元素，并且使用nums2中元素代替
    // 此方法会改变原数组
    nums1.splice(m, nums1.length-m, ...nums2)
    nums1.sort((a, b)=>a-b)
}