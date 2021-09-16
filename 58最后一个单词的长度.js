// solution 1: time 89.05%, memory 85.62%

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    var len = s.length
    var i = len-1
    while(s[i]===' '&&i>=0)
        i--
    if (i<0)
        return len
    var j = i
    while(s[i]!==' '&&i>=0)
        i--
    return j-i
};

