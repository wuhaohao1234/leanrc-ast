/**
str.match(正则,字符串) 返回字符串匹配正则的数组

ignoreCase 忽视大小写
/b/i 不区分大小写 b
global 全局匹配
/b/g 全局匹配b
m 多行匹配 
demo
const reg = /^b/gm
const str = 'abc\nb'
console.log(str.match(reg)); // 只会打印出 一个b第二行以b开头的b
^b
表达式:

/[0123456789]/ 代表匹配0到9其中的一个数组
[^a]  这一位不是a
example:
const reg = /[0-9][0-9][0-9]/g
const str = '1212fjdsklfj232313412'
console.log(str.match(reg));
(abc|bcd) abc或者bcd
exmaple:
const reg = /(abc|bcd)/

const str = 'abcbcd'

console.log(str.match(reg))
\w word 0 - 9 A-z_

\W ^/w
\d  digital 0-9

/s = [\t\n\r\v\f ]

\b 单词边界
example
const reg = /\bc/g

const str = 'abc cde'
console.log(str.match(reg));
\B 非单词边界
n+ 0~infinity
const reg = /\w+/g

const str = 'abc cde'
n* 0~infinity
n? 0个或1个
n{x,y} x到y个
^a 以a 开头
d$ 以d 结尾
 */

// const reg = /\w{3,4}/g

// const str = 'abjc cde'
// console.log(str.match(reg));

const reg = /^\d[\s\S]*\d$/g
const str = '12abc4'

console.log(str.match(reg));
