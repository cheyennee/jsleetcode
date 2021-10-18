// solution 1: time 53, memory 18
// hash
// 我的方法是计算次数，但是会卡在bbbaaaba、aaabbbba这个用例上
// 这种方法的主要思想在于验证双射关系
// 即s的任意一个字符被t中唯一的字符对应，同时t的任意一个字符被s中唯一的字符对应。这也被称为「双射」的关系。

var isIsomorphic = function(s, t) {
    if(s.length!==t.length)
        return false
    var smap = {}
    var tmap = {}
    for(var i=0;i<s.length;i++){
        if(smap[s[i]]&&smap[s[i]]!==t[i]||tmap[t[i]]&&tmap[t[i]]!==s[i])
            return false
        smap[s[i]]=t[i]
        tmap[t[i]]=s[i]
    }
    return true
};
