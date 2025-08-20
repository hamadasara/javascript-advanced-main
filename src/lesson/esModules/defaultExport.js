// ここにコードを書きながら確認しましょう！

// const fuga = 'fuga';

// export default fuga;  --ESモジュールではexport defaultは1ファイルにつき、1つしか使えない。

export default function testFn(text) {
  return `Hello ${text}`;
}


// 練習問題
// 問題 2
export default function defaultFn() {
  return 'default export';
}
