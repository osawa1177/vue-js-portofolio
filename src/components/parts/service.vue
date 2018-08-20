   <template>
   <section class="service ">
      <h2>Service</h2>
      <div class="row bg">

        <div class="col">
          <figure><img :src="icon1"></figure>
          <h3>ディレクション</h3>
          <p>お客様の要望をヒアリングし、現状の問題点を洗い出し、ベストなプランを提案します。</p>
        </div>
        <div class="col">
          <figure><img :src="icon2" style="width:48%"></figure>
          <h3>デザイン</h3>
          <p>使う人にわかりやすくを常に意識して、使う人が迷わない、デザインを心がけています。</p>
        </div>
        <div class="col">
          <figure><img :src="icon3" style="width:25%"></figure>
          <h3>コーディング</h3>
          <p>Javascript（jQuery. vue.js）を使用した動きのあるサイトやSPAなど様々なサイトコーディングを行っております。</p>
        </div>
      </div>
    </section>
    </template>

<script>
export default {
  data: function() {
    return {
      icon1: require("../../assets/img/top/icon1.svg"),
      icon2: require("../../assets/img/top/icon2.svg"),
      icon3: require("../../assets/img/top/icon3.svg")
    };
  }
};
</script>

 <style lang="scss">
.service {
  position: relative;
  .bg {
    margin-right: 3em;
    margin-top: 5em;
    margin-left: -10px;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 3% 0 0;
    align-items: center;
    background-color: #f6f6f6;
  }
  h2 {
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    font-size: 2em;
    border-bottom: 1px solid #000;
    padding-bottom: 1em;
    font-weight: 900;
    position: absolute;
    right: 10%;
    top: -30px;
  }
  .col {
    width: 250px;
    padding: 8em 1em 8em;
  }
  figure {
    text-align: center;
    img {
      width: 40%;
    }
  }
  h3 {
    text-align: center;
    padding-bottom: 2em;
    padding-top: 1em;
  }
  p {
    line-height: 2;
  }
}
@media (max-width:480px){
  .service {
    h2{
          top: -62px;
    }
  .col {
    width: 32%;
    padding: 3em 1em 4em;
  }
    p {
    font-size:.7em;
  }
  .bg{
    margin-right: 1em;
  }
}
}
</style>