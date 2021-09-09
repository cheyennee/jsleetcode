// solution 1: time 60.98%, memory 66.59%
// 纵向扫描：以一个串为基准去扫描其他串相同位置的字符是否相等

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<strs.length;j++){
            if (strs[0][i]!==strs[j][i]){
                const subStr = strs[0].substring(0, i)
                return subStr
            }
        }
    }
    return strs[0]
};


// solution 2: time 75.05%, memory 80.02%
// 横向扫描：即两个串之间对比

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var prefix = strs[0]
    for (let i=1;i<strs.length;i++){
         prefix = getPrefix(prefix, strs[i])
    }
    return prefix
};

var getPrefix = function(str1, str2){
    var i = 0
    var len = str1.length
    while(i<len&&str1[i]===str2[i])
        i++
    return str1.substring(0, i)
}