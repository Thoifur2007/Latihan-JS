// console.log('hello world');
//operator aritmethc
let x = 10;
let y = '10';
let z = 2*(x + y);
let isAdmin = true;
let isLoggedIn = false;
let age = 20;
//operator logical
console.log(isAdmin&&isLoggedIn);
//true && true = true
//true && false = false
//false && true = false
//true || true = true
//true || false = true
//false || true = true
//false || false = false
console.log(isAdmin||isLoggedIn);
console.log(!isAdmin);
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(++x);
// console.log(--x);
// console.log(--y);
// console.log(++y);
// console.log(z);
// console.log(x == y); //true
// console.log(x === y); //false kalo beda tipe
// console.log(x !== y);
// console.log(x > y);

//if else

if(age >= 18){
    console.log('you are adult');
}else{
    console.log('you are not adult');
}