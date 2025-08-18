// node src/lesson/defaultArgument.js

// ここにコードを書きながら確認しましょう！

// 引数を一つ取るように定義、デフォルト引数を指定
function argFn(arg = 'Hello') {
  console.log(arg);
}
// 因数を渡してない
argFn();


// ----デフォルト因数が有用な場合
function totalPrice(price, tax = 1.10) {
  return price * tax; // パーセント → 小数」に変換する→何割支払うか」を計算(例：5%引き → 95%払う → 1 - 0.05 = 0.95)
}

console.log(totalPrice(1000, 1.12)); // 1120
console.log(totalPrice(1000)); // 1100


// 練習問題
// 問題 1
function discountRateCalc(price, rate = 5) {
  return price * (1 - rate * 0.01);
}

console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000, 20));
