(()=>{//即時関数
const $doc = document;//変数名に$をつけると変数はDOM要素だよと明示的に表す
const $tab = $doc.getElementById('js-tab');// JavaScriptが引っかかるものはなるべくidを使ってあげる.名前にプレフィックス（説頭詞）でjs-をつける
const $nav = $tab.querySelectorAll('[data-nav]');//querySelectorAll=DOM要素の中から条件に当てはまるDOMを取得する
const $content = $tab.querySelectorAll('[data-content]')
const ACTIVE_CLASS = 'is-active';
const navLen = $nav.length;

//初期化
const init = () => {
  $content[0].computedStyleMap.display = 'block';
};
init();

  //クリックイベント
const handleClick = (e) => {
  e.preventDefault();//リンク要素を無効化させることができる

  //クリックされたnavとそのdataを取得
  const $this = e.target;//e.targetを指定すると今クリックされた要素をピンポイントで撮ってこれる
  const targetVal = $this.dataset.nav;//dataset=そのDOM要素のデータ属性を取る

  //対象外のnav,content全て一旦リセットする
  let index = 0;
  while(index < navLen){
    $content[index].style.display = 'none';
    $nav[index].classList.remove('ACTIVE_CLASS');
    index++;
  }

  //対象のコンテンツをアクティブ化する
  $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
  $nav[targetVal].classList.add('ACTIVE_CLASS');//DOM属性についているclass属性の一覧化を取得する
                        //add=リストの中に文字列を追加するという意味
  
};

//全nav要素に対して関数を適用・発火
let index = 0;
while(index < navLen){//$nav.length=nav要素の数
  $nav[index].addEventListener('click', (e) => handleClick(e));
  index++;
}

})();