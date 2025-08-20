import 'animate.css';

// ここにコードを書きながら確認しましょう！

// ---要素の取得
const title = document.getElementById('title');

console.log(title); // // <h1 id="title" class="title animate__animated">...</h1>

const button = document.querySelector('.button');

// ---target.addEventListener()  取得した要素に動きを加える
button.addEventListener('click', () => {
    title.classList.add('animate__hinge');
    setTimeout(() => {
        title.classList.remove('animate__hinge');
    }, 2000);
});


// 練習問題
// 要素を所得
const nodeType = document.querySelector('.card-type--mocha');

const eventType = document.querySelector('.card-type--yellow');

title.addEventListener('animationend', () => {
    // eventTypeカードを表示
    eventType.style.display = 'block';
    // animate.cssのfade.inuupクラスを付与
    eventType.classList.add('animate__fadeInUp');
});

// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
