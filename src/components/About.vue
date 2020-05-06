<template>
    <main class="sub-wrap about relative mb-5 mt-20">
      <h2>About</h2>
      <article class="about-block wrap">
        <section class="about-item-1">
          <figure class="about-item-1-figure"><img :src="about"></figure>
          <p class="about-text">開業以来、プロジェクトと向き合い妥協のない仕事をしてきました。<br>
            コーポレートサイト、ECサイト,検索サイト、ランディングページなど様々な、WEBづくりに関するあらゆることにお答えできる経験があります。
            お客様とたくさん話をして、たくさんのアイデアで一緒に夢をカタチにするお手伝いをしています。</p>
        </section>

        <section v-scroll="Scroll" class="slideInBottom_slow about-item">
          <h3>- 都内にてフリーランスのWEB制作をしております。</h3>

          <dl class="pt-2">
            <dt>社名</dt>
            <dd>Still Good Design</dd>
            <dt>所在地</dt>
            <dd>東京都葛飾区高砂2丁目</dd>
            <dt>創業</dt>
            <dd>2018年9月</dd>
            <dt>事業内容</dt>
            <dd>WEBの企画・提案・設計・デザイン・監理・製作</dd>
            <dt>WEB</dt>
            <dd>https://osawa-portfolio.web.app/</dd>
            <dt>MAIL</dt>
            <dd>osawa.tomohisa07@gmail.com</dd>
          </dl>
        </section>

        <iframe v-scroll="Scroll" class="slideInBottom_slow"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12952.36749396684!2d139.85734573546537!3d35.74854654773144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1565456811972!5m2!1sja!2sjp"
          width="1000" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </article>
    </main>
</template>
<script>
  import MixinScroll from '@/components/mixin/scroll';

  export default {
    title: "about",
    description: "アバウトページ",
    mixins: [MixinScroll],
    props: ["data"],

    data: function () {
      return {
        about: require("@/assets/img/about/about.png")
      };
    },

    methods: {
      Scroll: (evt, el) => {
        let top = el.getBoundingClientRect().top;
        if (window.scrollY > top + window.pageYOffset + -500) {
          el.classList.add("in-screen");
          return true;
        }
        return false;
      },
    }
  };
</script>

<style lang="scss" scoped>

  .mt-20{
    margin-top: 20rem;
  }


  iframe {
    filter: grayscale(100%);
  }

  iframe:hover {
    　transition: filter 0.6s ease;
    　filter: grayscale(0) saturate(2);
  }

  .about-item-1 {
    &-figure {
      width: 60%;
      margin: 0 auto 4rem;
    }
  }

  .about-text {
    width: 64%;
    margin: 0 auto;
    padding-bottom: 3rem;
    line-height: 1.9;
  }

  .about-item {
    width: 100%;
    margin: 2rem auto 5rem;


    .about-item dt:first-of-type, .about-item dd:first-of-type {
      border-top: 1px solid #1a1a1a;
    }

    dt {
      width: 20%;
      font-weight: bold;
      text-align: center;
      letter-spacing: 1px;
      float: left;
      padding: 20px 0;
      border-top: 1px solid #e7e7e7;

      &:first-of-type {
        border-top: 1px solid #1a1a1a;
      }

      &:first-of-type {
        border-top: 1px solid #1a1a1a;
      }
    }


    dd {
      width: 80%;
      margin-left: 20%;
      border-left: 1px solid #e7e7e7;
      padding: 20px 40px;
      border-top: 1px solid #e7e7e7;

      &:first-of-type {
        border-top: 1px solid #1a1a1a;
      }

      &:first-of-type {
        border-top: 1px solid #1a1a1a;
      }
    }

  }

  .about {
    h2 {
      writing-mode: vertical-rl;
      font-size: 2em;
      border-bottom: 1px solid #1a1a1a;
      padding-bottom: 1em;
      font-weight: 900;
      position: absolute;
      left: -7%;
      top: 0%;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 3px;
    }

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
