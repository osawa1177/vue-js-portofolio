<template>
  <div class="wrapper about">
    <h2>About</h2>
    <div class="box">
      <p>東京でフリーランスのWeb制作をしております。</p>
      <figure><img :src="img_s"></figure>
      <div>
        <dl class="about-prof">
          <!-- <dt>名称 ：</dt><dd>WinterLINE （ウィンターライン）</dd> -->
          <dt>所在地 ：</dt>
          <dd>東京都</dd>
          <dt>お問い合わせ ：</dt>
          <dd>http://tomozo.atumari.net/</dd>
          <dt>事業内容 ：</dt>
          <dd>Web制作におけるディレクション、デザイン、
            <br>HTML・CSSコーディング、スマートフォンサイト制作等</dd>
        </dl>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  title: "about",
  description: "アバウトページ",
  props: ["data"], // 追加
  data: function() {
    return {
      img_s: require("../assets/img/img_s.jpg")
    };
  }
};
</script>

 <style lang="scss" scoped>
.about {
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
  .about-prof {
    margin-bottom: 2em;
    line-height: 1.65;
    dt {
      float: left;
      display: block;
      width: 20%;
      font-weight: bold;
    }
  }
  dd {
    font-size: 1em;
    float: right;
    width: 80%;
  }
  figure img {
    width: 35%;
    margin: 2em 0;
  }
  .box {
    margin-left: 5em;
  }
}
.wrapper {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-top: 3em;
  margin-bottom: 9em;
}
@media (max-width: 480px) {
  .about {
    .box {
      margin-left: 3em;
    }
    .about-prof {
      margin-top: 2em;
      margin-left: -5em;
      padding-bottom: 6em;
      dt {
        width: 37%;
      }
      dd {
        width: 60%;
      }
    }
  }
}
</style>