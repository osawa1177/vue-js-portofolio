<template>

  <div>
    <moveline></moveline>
    <mainblock></mainblock>
    <ser></ser>
    <section class="works">
      <h2>Works</h2>
      <div class="row">
        <figure>
          <router-link to="/works"><img :src="img1" class="img1"></router-link>
        </figure>
        <figure>
          <router-link to="/works"><img :src="img2" class="img2"></router-link>
        </figure>
        <figure>
          <router-link to="/works"><img :src="img3" class="img3"></router-link>
        </figure>
      </div>
      <figure class="img-ab">
        <router-link to="/works"><img :src="img4" class="img4"></router-link>
      </figure>
    </section>

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
  import toolskill from "@/components/parts/ToolSkill";

  export default {
    name: "top",
    title: "Top", // title 追加
    description: " tomohisa ohsawaのポートフォリオサイト", // description 追加
    props: ["data"],
    components: {
      mainblock: mainblock,
      ser: service,
      moveline: moveline,
      toolskill: toolskill,
    },
    data: function () {
      return {
        img1: require("../assets/img/top/image01.jpg"),
        img2: require("../assets/img/top/image02.jpg"),
        img3: require("../assets/img/top/image03.jpg"),
        img4: require("../assets/img/top/image04.jpg")
      };
    }
  };
</script>

<style lang="scss" scoped>

  .works {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    padding: 3% 0 0;
    margin-bottom: 7em;

    h2 {
      position: absolute;
      right: 33%;
      margin-top: -1em;
    }

    .row {
      justify-content: space-around;
      padding-top: 4em;
    }

    .img1 {
      width: 78%;
      padding-left: 1em;
    }

    .img2 {
      width: 70%;
    }

    .img3 {
      width: 81%;
    }

    .img4 {
      width: 47%;
    }

    .img-ab {
      position: absolute;
      right: 2%;
      bottom: -25%;
      padding-bottom: 2em;
    }
  }

  .about {
    position: relative;

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

    .works {
      .img4 {
        width: 75%;
      }

      .img-ab {
        position: absolute;
        right: 8%;
        bottom: -60%;
        padding-bottom: 2em;
        margin-left: 13em;
      }

      h2 {
        right: 29%;
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

  }
</style>
