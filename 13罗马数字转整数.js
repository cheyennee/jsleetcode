// solution 1: time 92.7%, memory 62.68%

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var res = 0
    var len = s.length
    for(let i=0;i<len;i++){
        switch(s[i]){
            case 'I': res+=1;break;
            case 'V': res+=5;break;
            case 'X': res+=10;break;
            case 'L': res+=50;break;
            case 'C': res+=100;break;
            case 'D': res+=500;break;
            case 'M': res+=1000;break;
        }
        if (i!=len-1&&s[i]==='I'&&(s[i+1]==='V'||s[i+1]==='X'))
            res-=2
        if (i!=len-1&&s[i]==='X'&&(s[i+1]==='L'||s[i+1]==='C'))
            res-=20
        if (i!=len-1&&s[i]==='C'&&(s[i+1]==='D'||s[i+1]==='M'))
            res-=200
    }
    return res;
};


// solution 2: time 60.45%, memory 47.35%

var romanToInt = function(s){
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);
    let ans = 0
    const n = s.length
    for (let i=0;i<n;i++){
        const value = symbolValues.get(s[i])
        if (i<n-1&&value < symbolValues.get(s[i+1]))
            ans -= value
        else
            ans += value
    }
    return ans
}