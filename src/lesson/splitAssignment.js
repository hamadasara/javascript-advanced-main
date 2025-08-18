// node src/lesson/splitAssignment.js

// ここにコードを書きながら確認しましょう！
const array = ['one', 'two', 'three'];

const [hoga, fuga, piyo] = array;

console.log(array);

// 関数の返り値を分割代入で取得する
function testFn() {
  return ['Hello', 2022];
}

const [text, year] = testFn();
console.log(text); // Hello
console.log(year); // 2022


// オブジェクト型
const gizumo = {
  name: 'Gizumo',
  established: '2015年5月15日',
  place: 'Shibuya',
};

// ここで分割代入
const { name, established, place } = gizumo;

console.log(name); // Gizumo
console.log(established); // 2015年5月15日
console.log(place); // Shibuya


// 入れ子のオブジェクトに分割代入を使用する
const gizumos = {
  name: 'Gizumo',
  established: '2026-09-08',
  place: 'Shibuya',
  course: {
    frontend: 'Vue', // 親→course 子→frontendとbackend(入れ子関係)
    backend: 'Laravel',
  },
};

const { course: { frontend, backend } } = gizumos;
console.log(frontend); // Vue
console.log(backend); // Laravel


// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}
// 関数を実行して返り値の配列から3番目の値（argが使われている）を分割代入で取得
const [, , userAge] = arrayFn('Java'); // Javaは引数の例
// 取得した値を出力
console.log(userAge);



// 問題 2
function objectFn({ name }) {
  console.log(name);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);

