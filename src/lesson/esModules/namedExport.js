// ここにコードを書きながら確認しましょう！

const hoge = 'hoge';
// 変数hogeをnamed exportによってエクスポートしている
export { hoge };

// 宣言とエクスポートを同時に行う
const hoges = 'hoge';

export function testFn(text) {
  return `Hello ${text}`;
};

export { hoges };






// 練習問題
// 問題 1
export const nameFn = () => {
  return 'Gizumo taro';
};



export const calcFn = (num) => {
  return num * 10;
};
