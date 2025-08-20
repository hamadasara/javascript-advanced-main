// ここにコードを書きながら確認しましょう！

// ------同期処理
console.log('1番目の処理');
console.log('2番目の処理');
console.log('3番目の処理');

// 1番目の処理
// 2番目の処理
// 3番目の処理


// ------非同期処理
console.log('1番目の処理'); // 同期処理

setTimeout(() => { // 非同期処理
    console.log('2番目の処理');
}, 0);

console.log('3番目の処理'); // 同期処理

// 1番目の処理
// 3番目の処理
// 2番目の処理


// ------非同期処理の完了を待機する
// 非同期処理が複数回実行される時、非同期処理の完了後に特定の処理を
// 行うにはどうすればよいか見ていきたいと思います。

console.log('1番目の処理');

setTimeout(() => {
    console.log('二番目の処理');
}, 2000);

setTimeout(() => {
    console.log('3番目の処理');
}, 1000);

// 1番目の処理
// 3番目の処理
// 2番目の処理



// 3番目の処理」を確実に一番最後に実行されるようにするにはどうしたら良いでしょうか？
// これはコールバック関数に次の非同期処理を書くことで「3番目の処理」を最後に実行することが可能になります。
console.log('1番目の処理');

setTimeout(() => {
    console.log('二番目の処理');
    setTimeout(() => {
        console.log('3番目の処理');
    }, 1000);
}, 2000);

// 1番目の処理
// 2番目の処理
// 3番目の処理


// -----Promise
const promise = new Promise((resolve, reject) => {
    // 引数に処理の結果として文字列を渡している
    resolve('非同期が成功しました');
});

// resolve関数が実行されるとthenメソッドが実行される
// resolve関数の引数に渡した「非同期が成功しました」
// がコールバック関数の引数であるvalに入ってくる
promise.then(val => {
    console.log(val);
});

console.log(promise);


// 練習問題
// 問題 1

// 関数returnPromiseを実行し、非同期処理の結果である「エラーが発生しました」
// をconsoleに出力してください。
// ただし、関数returnPromiseは編集しないこと。

const returnPromise = () => {
    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject('エラーが発生しました。');
        }, 3000);
    });
};

returnPromise().catch(error => {
    console.log(error);
});
