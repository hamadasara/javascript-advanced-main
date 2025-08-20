// node src/lesson/arrowFunction.js
// ここにコードを書きながら確認しましょう！

// アロー関数の省略記法、関数の引数が1つの時は()を省略できる

const arrowFn = (arg) => {
  console.log(arg);
};

arrowFn(20);

// 修正⬇️
const arrowFn2 = arg => {
  console.log(arg);
};

arrowFn2(30);

// 引数を受け取らない時や、引数が複数ある時は()を省略することはできないので、注意しましょう。

// 引数が2つなので()は省略できない
// const arrowFn = (title, author) => {
//   console.log(arg, author);
// };

// 引数を受け取っていないので、()は省略できない
// const arrowFn = () => {
//   console.log('Gizumo');
// };


// 関数の処理が1つの式の場合、{}とreturnを省略できる
const arrowFn3 = num => {
  return num * 10;
};
console.log(arrowFn3(30));

// 修正⬇️
const arrowFn4 = num => num * 10;

console.log(arrowFn4(30));



// 練習問題
// 問題 1
// const testFn = function (name) {
//   return `Gizumo ${name}`;
// };

const testFn = name => `Gizumo ${name}`;

console.log(testFn('sara'));


