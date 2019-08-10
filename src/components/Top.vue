<template>

  <div>
    <moveline></moveline>
    <mainblock></mainblock>
    <ser></ser>
    <works></works>
    <section class="about">
      <h2>About</h2>
      <div class="row bg">
        <ul>
          <li> 事業形態 : 個人事業主</li>
          <li> 事業内容 : WEBサイト制作</li>
          <li> 所在地 : 東京都</li>
        </ul>
      </div>
    </section>
    <toolskill></toolskill>
  </div>

</template>

<script>
  import mainblock from "@/components/parts/Main";
  import service from "@/components/parts/Service";
  import moveline from "@/components/parts/Moveline";
  import works from "@/components/parts/top/Works";

  export default {
    name: "top",
    title: "Top", // title 追加
    description: " tomohisa ohsawaのポートフォリオサイト", // description 追加
    props: ["data"],
    components: {
      mainblock: mainblock,
      ser: service,
      moveline: moveline,
      works: works,
    },

  };
</script>

<style lang="scss" scoped>


  .about {
    position: relative;
    height: 23vh;

    h2 {
      position: absolute;
      left: 10%;
      top: -22%;
    }

    .bg {
      margin-left: 4em;
      margin-top: 11em;
    }

    ul {
      width: 100%;
      text-align: center;
      padding: 3em 0;

      li {
        display: block;
        height: 1em;
        padding: 2em 0 2em;

        &:last-child {
          padding-bottom: 4em;
        }

        &:first-child {
          padding-top: 4em;
        }
      }
    }
  }

  .skills {
    padding-top: 7vh;
    height: 100%;
    position: relative;

    .graph {
      width: 100%;
      height: 30px;
      border: none;
      background: rgb(233, 233, 233);
      position: relative;
      margin-bottom: 1.5em;
    }

    #bar {
      height: 29px;
      background: #b2e9ff;
    }

    p {
      position: absolute;
      color: #fff;
      margin: 0;
      line-height: 30px;
      padding-left: 1em;
    }

    .wrap {
      width: 63%;
      margin: 0 auto;
      margin-top: 11em;
    }

    h2 {
      position: absolute;
      top: 21%;
      right: 12%;
    }
  }

  @media (max-width: 480px) {
    .main {
      background: url(/static/img/main.ad3ebec.jpg) no-repeat;
      background-position: right center;
      width: 100%;
      height: 41vh;
      padding: 10vh;
      margin-left: auto;
      background-size: contain;

      .title {
        margin-left: -3em;
      }
    }

    .about {
      .bg {
        margin-left: 1em;
        margin-top: 9em;
      }

      ul {
        padding: 0;
      }
    }
    .skills {
      h2 {
        position: absolute;
        top: 3%;
        right: 7%;
        z-index: 3;
      }

    }
  }
</style>
