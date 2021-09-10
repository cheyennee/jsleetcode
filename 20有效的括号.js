// solution 1: time 60.13%, memory 24.63%
// 栈
/**
 * @param {string} s
 * @return {boolean}
 */
//  var isValid = function(s) {
//     var stack = []
//     for(let i=0;i<s.length;i++){
//         if (s[i]==='('||s[i]==='['||s[i]==='{')
//             stack.push(s[i])
//         if (s[i]===')'){
//             if(stack[stack.length-1]==='(')
//                 stack.pop()
//             else
//                 return false
//         } else if (s[i]===']'){
//             if(stack[stack.length-1]==='[')
//                 stack.pop()
//             else
//                 return false
//         } else if (s[i]==='}'){
//             if(stack[stack.length-1]==='{')
//                 stack.pop()
//             else
//                 return false
//         }
//     }
//     if(stack.length>0)
//         return false 
//     else
//         return true
// };

// solution 2: time 60.13%, memory 25.63%
// 同样使用了栈，也使用了map,这个解法就很优雅,但是效率差不多，而且map得设计合理

var isValid = function(s){
    const n = s.length
    if (n%2 === 1)
        return false
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    const stk = []
    for(let ch of s){
        if (pairs.has(ch)){
            if (!stk.length || stk[stk.length-1] !== pairs.get(ch))
                return false
            stk.pop()
        }
        else
            stk.push(ch)
    }
    return !stk.length
}
