import axios from 'axios';
import { createErrorElement, createElements } from './createElement.js';

// 「検索」ボタンがクリックされるまでの処理
window.addEventListener('DOMContentLoaded', () => {
    const formElement = document.forms['search-form'];

    // HTML要素とinput要素の入力値の取得
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const characterElement = document.getElementById('character');
        const messageElement = document.getElementById('error-message');
        const pictureBookId = formElement.elements['id'].value;
        // ↑<form name="search-form"> 内の <input name="id"> から取得
        // ユーザーが25と入力したら、
        // axiosを使用してサーバーにリクエストpictureBookId＝25になる

        // 表示の初期化
        if (messageElement !== null) messageElement.remove();
        while (characterElement.lastChild) {
            characterElement.removeChild(characterElement.lastChild);
        }


        axios.get(`https://pokeapi.co/api/v2/pokemon/${pictureBookId}`).then(response => {
            // リクエストを送る先のURL、responseはそのURLにアクセスした結果、サーバーからの返答(レスポンス)

            const data = response.data;
            // console.log(data);
            const imgPath = data.sprites.other['official-artwork'].front_default;

            const jaRequestUrl = data.species.url;

            axios.get(jaRequestUrl).then(({ data }) => {
                const characterName = data.names[0].name;

                // 取得したポケモンの情報をもとに表示するHTML要素を作成
                const imgElement = `<img src="${imgPath}" width="475" height="475" alt="" class="character__img">`;
                const nameElement = `<p class="character__name">${characterName}</p>`;
                const fragment = createElements(imgElement + nameElement);

                // 作成したHTML要素をDOMに反映
                characterElement.appendChild(fragment);

            }).catch(error => {
                // リクエストに失敗した場合はエラーメッセージを表示
                switch (error.response && error.response.status) {
                    case 404:
                        formElement.after(createErrorElement(error.message));
                        break;
                    default:
                        formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
                        break;
                }
            });

        }).catch(error => {
            switch (error.response && error.response.status) {
                case 404:
                    formElement.after(createErrorElement(error.message));
                    break;
                default:
                    formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
                    break;
            }
        });
    });

});

