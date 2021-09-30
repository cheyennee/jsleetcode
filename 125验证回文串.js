// solution 1: time 55.1%, memory 69.72%

var isPalindrome = function(s) {
    if(s==null) return true
    var reg=/[\W\_]/g;  
    // js没有直接判断是否是数字或字母的函数，必须使用正则表达式
    str=s.toLowerCase().replace(reg,"").split("");
    let l=0, r=str.length-1
    while(l<r){
    if(str[l]!=str[r]){  
        return false
    }
    l++;
    r--;
    }
    return true
};