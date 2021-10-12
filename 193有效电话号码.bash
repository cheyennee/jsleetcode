// solution 1: time 58, memory 47
// 这题的本质是在考正则表达式的书写
// https://leetcode-cn.com/problems/valid-phone-numbers/solution/zheng-ze-biao-da-shi-zhong-xian-ding-fu-yu-ding-we/

grep -P '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt