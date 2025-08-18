// node src/lesson/spreadSyntax.js

// ここにコードを書きながら確認しましょう！
// // ----配列の展開----
const numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(...numbers); // 1 2 3 4 5

// 配列を複製する
const numbers2 = [1, 2, 3, 4, 5];

const copyNumbers = [...numbers2];

console.log(copyNumbers); // [ 1, 2, 3, 4, 5 ]



// 値を追加して新しい配列を追加
const numbers3 = [1, 2, 3];

const newNumbers = [...numbers3, 4, 5];

console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]

// 配列のマージ
const animal = ['cat', 'dog'];
const fruit = ['apple', 'orange'];

const margeArray = [...animal, ...fruit];

console.log(margeArray);

// ----オブジェクトの展開----
const company = {
  name: 'Gizumo',
  place: 'Shibuya',
};
// スプレッド構文でcompanyを展開し、展開したものをオブジェクトリテラル{}の中に入れている
const copy = { ...company };

console.log(copy); // { name: 'Gizumo', place: 'Shibuya' }


// プロパティを追加した新しいオブジェクトを作成
const company2 = {
  name: 'Gizumo',
  place: 'Shibuya',
};

const nemCompanyInfo = { ...company, established: '2015年5月15日' };

console.log(nemCompanyInfo); // { name: 'Gizumo', place: 'Shibuya', established: '2015年5月15日' }


// 同名プロパティを更新した新しいオブジェクトを作成
const company3 = {
  name: 'Gizumo',
  place: 'Shibuya',
  established: '2015年5月15日',
};

const updateProperty = {
  name: 'Front End',
};

const updaCompanyInfo = { ...company3, ...updateProperty };

console.log(updaCompanyInfo);
// オブジェクトはプロパティのkey名が被ると、後に書かれた方で上書きされます。



// 練習問題  node src/lesson/spreadSyntax.js
// 問題 1
const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];
  return [...array, ...framework];
}

console.log(arrayFn(packageManager));


// 問題 2
const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectB = {
  version: 3,
};

const objectC = { ...objectA, ...objectB, routingLibrary: 'Vue Router' };

console.log(objectC);
