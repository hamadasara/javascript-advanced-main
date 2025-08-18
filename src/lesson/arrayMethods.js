// node src/lesson/arrayMethods.js
// ここにコードを書きながら確認しましょう！

const ary = [1, 2, 3, 4, 5];

ary.forEach((val, index, array) => {
  console.log(val, index, array);
});








// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

const newArray = array.map(obj => ({
  ...obj,
  className: 'c-' + obj.className
}));

console.log(newArray);





