// 必要な関数をモジュールからインポートする
import { $axios } from "./axiosHelper";
import { createElements, createErrorElement } from "./createElement";

window.addEventListener('DOMContentLoaded', () => {
  // ここに処理を書いていく

  // 1,全ポケモンを取得
  $axios('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response => {
    const results = response.data.results; // ポケモン一覧

    // 各ポケモンの詳細情報を取得
    results.forEach(pokemon => {
      $axios(pokemon.url).then(detailResponse => {
        const imgUrl = detailResponse.data.sprites.other['official-artwork'].front_default;
        const speciesUrl = detailResponse.data.species.url;

        $axios(speciesUrl).then(speciesResponse => {
          const jaName = speciesResponse.data.names[0].name;

          const htmlString = `<li class = "list-item">
            <div class = "character">
              <img src= "${imgUrl}" width="475" height="475" alt="" class="character__img" />
            </div>
            <p class = "character__name">${jaName}</p>
          </li>`;
          const fragment = createElements(htmlString);

          document.getElementById('list').appendChild(fragment);
        }).catch(error => {
          console.log(error);
        });
      }).catch(error => {
        console.log(error);
      });
    });

  }).catch(error => {
    document.getElementById('list').appendChild(createErrorElement(error));
  });

});


