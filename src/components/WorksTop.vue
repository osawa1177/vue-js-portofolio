<template lang="html">
  <div>
    <moveline></moveline>
    <div class="wrap work-stop mt-4 relative">
      <h2>Works</h2>
      <article>
        <section>
          <figure>
            <img :src="geechs01">
          </figure>
          <h3 class="ttl">geechs job サイト リニューアル </h3>
          <p class="skill"> Icon Design /HTML,CSS,javascript </p>
          <p class="read"> 以前からあったフリーランス検索サイトのリニューアル作業を行いました。その中でフロントのコーディングをメインに作業しました。<br>
            <a href="https://geechs-job.com/" target="_blank" class="text-link">https://geechs-job.com/</a>
          </p>
        </section>

        <section>
          <figure>
            <img :src="pop01">
          </figure>
          <h3 class="ttl">POP SNOW リフト券プレゼントキャンペーン </h3>
          <p class="skill"> Design / HTML,CSS,javascript</p>
          <p class="read"> 日本全国、様々なスキー場様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>
        </section>
        <section>
          <figure>
            <img :src="fuyu01">
          </figure>
          <h3 class="ttl">冬スポツアー　温泉特集ページ </h3>
          <p class="skill"> Design / HTML,CSS,javascript </p>
          <p class="read">冬スポ!!WINTER SPORT FESTAのサイト内にスキー・スノーボードツアーページを作成し、その中で温泉ページ特集を作成しました。</p>
        </section>
        <section>
          <figure>
            <img :src="pop02">
          </figure>
          <h3 class="ttl">日本スキー場開発様のプレゼントキャンペーンページ</h3>
          <p class="skill"> Design / HTML,CSS,javascript </p>
          <p class="read">日本スキー場開発様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>
        </section>
      </article>

    </div>
  </div>
</template>
<script>
  import moveline from "@/components/parts/Moveline";

  export default {
    title: "works",
    description: "Worksトップページ",
    props: ["data"],
    components: {
      moveline: moveline
    },
    data: function () {
      return {
        geechs01: require("../assets/img/works/geechs01.png"),
        pop01: require("../assets/img/works/pop01.jpg"),
        fuyu01: require("../assets/img/works/fuyu01.jpg"),
        pop02: require("../assets/img/works/pop02.jpg")
      };
    }
  };
</script>

<style lang="scss" scoped>

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
