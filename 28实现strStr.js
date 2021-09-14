// solution 1: time 15.47%, memory 49.05% ?用时是我没想到的?

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length===0)
        return 0
    var len = haystack.length
    var len2 = needle.length
    var i, j = 0
    for(i=0;i<len;i++){
        if (haystack[i]!=needle[j]){
            i-=j
            j=0
            continue
        }
        else
            j++
        if (j===len2)
            return i-j+1
    }
    return -1
};

// solution 2: time 21.61%, memory 21.5%
// 此解法与解法1一样均属于暴力解法，但是用了双重循环
var strStr = function(haystack, needle) {
    if(needle.length===0)
        return 0
    var len = haystack.length
    var len2 = needle.length
    for(var i=0;i<=len-len2;i++){
        var flag = false
        for(var j=0;j<len2;j++){
            if(haystack[i+j]!==needle[j]){
                flag = true
                break
            }
        }
        if(!flag)
            return i
    }
    return -1
};

// solution 3: KMP属实难顶