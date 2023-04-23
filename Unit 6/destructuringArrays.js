let letters = ['A','B','C','D','E','F','G','H','I']
let a,b,c,d, rest

[a,b,c,d, ...rest] = letters

console.log(a + b + c + d);
console.log(rest);