<template lang="html">
  <main class="sub-wrap work-stop relative mt-20">
    <h2>Works</h2>
    <article class="wrap">
      <section>
        <figure class="work-img"><img :src="worksmain"></figure>
        <p class="work-text">- これまでに携わった様々な作品を掲載しています -</p>
        <figure v-scroll="Scroll" class="slideInBottom_slow">
          <img :src="gleasin">
        </figure>
        <h3 class="ttl">gleasin web アプリ </h3>
        <p class="skill"> UI/UX Design /HTML,CSS,javascript / Vue.js(Nuxt)</p>
        <p class="read"> 商業施設とテナントを繋ぐマッチングwebアプリ制作、主にデザイン、フロントエンドを担当<br>
          <a href="https://gleasin.jp/" target="_blank" class="text-link">https://gleasin.jp</a>
        </p>
      </section>
      <section>
        <figure v-scroll="Scroll" class="slideInBottom_slow">
          <img :src="geechs01">
        </figure>
        <h3 class="ttl">geechs job サイト リニューアル </h3>
        <p class="skill"> Icon Design /HTML,CSS,javascript </p>
        <p class="read"> 以前からあったフリーランス検索サイトのリニューアル作業を行いました。その中でフロントのコーディングをメインに作業しました。<br>
          <a href="https://geechs-job.com/" target="_blank" class="text-link">https://geechs-job.com/</a>
        </p>
      </section>
      <section v-scroll="Scroll" class="slideInBottom_slow">
        <figure>
          <img :src="pop01">
        </figure>
        <h3 class="ttl">POP SNOW リフト券プレゼントキャンペーン </h3>
        <p class="skill"> Design / HTML,CSS,javascript</p>
        <p class="read"> 日本全国、様々なスキー場様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>
      </section>
      <section v-scroll="Scroll" class="slideInBottom_slow">
        <figure>
          <img :src="fuyu01">
        </figure>
        <h3 class="ttl">冬スポツアー　温泉特集ページ </h3>
        <p class="skill"> Design / HTML,CSS,javascript </p>
        <p class="read">冬スポ!!WINTER SPORT FESTAのサイト内にスキー・スノーボードツアーページを作成し、その中で温泉ページ特集を作成しました。</p>
      </section>
      <section v-scroll="Scroll" class="slideInBottom_slow">
        <figure>
          <img :src="pop02">
        </figure>
        <h3 class="ttl">日本スキー場開発様のプレゼントキャンペーンページ</h3>
        <p class="skill"> Design / HTML,CSS,javascript </p>
        <p class="read">日本スキー場開発様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>
      </section>
    </article>

  </main>
</template>
<script>
  import MixinScroll from '@/components/mixin/scroll';

  export default {
    title: "works",
    mixins: [MixinScroll],
    description: "Worksトップページ",
    props: ["data"],

    data: function () {
      return {
        worksmain: require("@/assets/img/works/main.png"),
        geechs01: require("@/assets/img/works/geechs01.png"),
        pop01: require("@/assets/img/works/pop01.jpg"),
        fuyu01: require("@/assets/img/works/fuyu01.jpg"),
        pop02: require("@/assets/img/works/pop02.jpg"),
        gleasin: require("@/assets/img/works/gleasin.png")
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

  .mt-20 {
    margin-top: 20rem;
  }

  .work-img {
    width: 80%;
    margin: 0 auto 2rem;
  }

  .work-text {
    width: 64%;
    margin: 0 auto 4rem;
    padding-bottom: 3rem;
    line-height: 1.9;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .work-stop {
    h2 {
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

    .ttl {
      margin-top: 1em;
      margin-bottom: 1em;
      font-weight: 900;
      font-size: 1.2rem;
    }

    .skill {
    }

    .read {
      line-height: 1.65;
      border-bottom: 1px solid #ccc;
      padding-bottom: 3em;
      margin-bottom: 3em;
      color: #373737;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .text-link {
      color: #B2E9FF;
    }
  }

  article {
    section:last-of-type {
      :last-child {
        border-bottom: none;
      }
    }
  }

</style>
