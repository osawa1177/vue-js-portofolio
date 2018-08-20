<template lang="html">
<div class="wrapper workstop">
<h2>Works</h2>
<div class="box">
  <figure>
    <a href="https://www.popsnow-net.com/useful/10030.php" target="_blank">
  <img :src="pop01"></a>
  </figure>
  <h3 class="ttl"><a href="https://www.popsnow-net.com/useful/10030.php" target="_blank">POP SNOW リフト券プレゼントキャンペーン </a></h3>
<p class="skill"> Design / HTML,CSS </p>
<p class="read"> 日本全国、様々なスキー場様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>
  <figure>
    <a href="http://www.fuyusupo.jp/tour/spa/" target="_blank">
  <img :src="fuyu01"></a>
  </figure>
  <h3 class="ttl"><a href="http://www.fuyusupo.jp/tour/spa/" target="_blank">冬スポツアー　温泉特集ページ </a></h3>
<p class="skill"> Design / HTML,CSS </p>
<p class="read">冬スポ!!WINTER SPORT FESTAのサイト内にスキー・スノーボードツアーページを作成し、その中で温泉ページ特集を作成しました。</p>
  <figure>
    <a href="https://www.popsnow-net.com/special/compilation/171805.php" target="_blank">
  <img :src="pop02"></a>
  </figure>
  <h3 class="ttl"><a href="https://www.popsnow-net.com/special/compilation/171805.php" target="_blank">日本スキー場開発様のプレゼントキャンペーンページ</a></h3>
<p class="skill"> Design / HTML,CSS </p>
<p class="read">日本スキー場開発様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>

</div>

</div>
</template>
<script>
export default {
  title: "works",
  description: "Worksトップページ",
  props: ["data"], // 追加
  data: function() {
    return {
      pop01: require("../assets/img/works/pop01.jpg"),
      fuyu01: require("../assets/img/works/fuyu01.jpg"),
      pop02: require("../assets/img/works/pop02.jpg")
    };
  }
};
</script>

<style lang="scss">
.workstop {
  h2 {
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    font-size: 2em;
    border-bottom: 1px solid #000;
    padding-bottom: 1em;
    font-weight: 900;
    position: absolute;
    left: -7%;
    top: 0%;
  }
  img {
    width: 100%;
  }
  .box {
    margin-left: 3em;
  }
  h3 {
    margin-bottom: 1em;
    font-weight: 900;
  }
  .skill {
    margin-bottom: 1em;
  }

  .read {
    line-height: 1.65;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3em;
    margin-bottom: 3em;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
}
.wrapper {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-top: 3em;
}
</style>
