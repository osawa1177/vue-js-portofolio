<template>
  <div>
    <moveline></moveline>
    <div class="sub-wrap about relative mt-4 mb-5">
      <h2>About</h2>
      <article class="about-block">
        <section class="about-item-1">
          <h3>- 都内でフリーランスのWeb制作をしております。</h3>
          <figure><img :src="img_s"></figure>
        </section>
        <section class="about-item-2 bg">
          <dl class="about-prof pl-10">
            <div class="d-flex dash-border pb-1 mb-1">
              <dt>所在地 ：</dt>
              <dd>東京都</dd>
            </div>
            <div class="d-flex dash-border pb-1 mb-1">
              <dt>お問い合わせ ：</dt>
              <dd>http://tomozo.atumari.net</dd>
            </div>
            <div class="d-flex">
              <dt>事業内容 ：</dt>
              <dd>Web制作におけるディレクション、デザイン、
                <br>HTML・CSSコーディング、スマートフォンサイト制作等
              </dd>
            </div>
          </dl>
        </section>
      </article>
    </div>
  </div>
</template>
<script>
  import moveline from "@/components/parts/Moveline";

  export default {
    title: "about",
    description: "アバウトページ",
    props: ["data"],
    components: {
      moveline: moveline
    },
    data: function () {
      return {
        img_s: require("../assets/img/img_s.jpg")
      };
    }
  };
</script>

<style lang="scss" scoped>

  .moveline {
    height: 132%;

    &-block {
      height: 132%;
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

    h3{
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 3px;
      position: absolute;
    }

    .bg {
      padding: 3rem;
    }

    .about-prof {
      margin-bottom: 2em;
      line-height: 2.2;

      dt {
        width: 22%;
        font-weight: bold;
      }

      dd {
        font-size: 1em;

      }

    }

    .about-item-1 {
      width: 40%;
    }

    .about-item-2 {
      position: absolute;
      right: -8%;
      bottom: -14%;
      width: 80%;
      height: 300px;
      z-index: -2;
    }

    figure img {
      width: 100%;
      margin: 4em 0 2rem;
    }

    .about-block {
      margin-left: 5em;
      display: flex;
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
