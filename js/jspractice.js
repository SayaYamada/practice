// document.write("Hello World!");
// alert("Hello World!");

// console.log("Hello World!" + "田中さん");
// console.log(10 + 10);
// console.log("10" + "10");

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(2 * 2);
// console.log(10 / 3);
// console.log(10 % 3);

// let x = 1;
// let y = 1;
// x++;
// console.log(x);
// y--;
// console.log(y);

// let x = 7;
// let y = x++;
// let x2 = 7;
// let y2 = ++x2;

// console.log(x);
// console.log(y);
// console.log(x2);
// console.log(y2);

//変数とは　値を代入するための箱
//変数とは　値を別名で定義したもの


'use strict'; 
//このJSは厳密にチェックを行うという意味。一番最初に書く。
//詳しくエラーチェックをしてくれる。

let age = 30;
const name ="田中太郎"; //絶対変わらないものはconstで定義

age = age + 2;

// shift + @ で　`　バッククォーテーション
console.log(`${name}さんの年齢は${age}です`);

// ES6  or ES2015　新しいバージョン
// ES2015は変数letよりもできれば定数constを使用する
// ver 変数名/定数　←もう使わない
// verの所はletもしくはconstに置き換える