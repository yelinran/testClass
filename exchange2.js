//第一种方法:通过第三个数值进行中间存储实现数值互换
var a = 5,
    b = 2,
    c = a;
console.log("a:"+a+" b:"+b);
a = b;
b = c;
console.log("a:"+a+" b:"+b);
//第二种方法:通过求和的方法相减实现数值的互换
var n = 5,
    m = 2;
console.log("n:"+n+" m:"+m);
m = m + n;
n = m - n;
m = m - n;
console.log("n:"+n+" m:"+m);
//第三种方法:通过ES6解构赋值实现
var x = 5,
    y = 2;
console.log("x:"+x+" y:"+y);
[x,y] = [y,x];
console.log("x:"+x+" y:"+y);
