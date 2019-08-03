<template>
  <div class="top">
    <moveline></moveline>
    <section>
      <transition name="fade">
        <div class="row">
          <div class="main">
            <div class="title">
              <h1>Tomohisa Ohsawa</h1>
              <h2>portfolio</h2>
            </div>
          </div>
        </div>
      </transition>
    </section>
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

    <section class="skills">
      <h2>Skills</h2>
      <div class="row">
        <div class="wrap">
          <div id="progress" class="graph">
            <div id="bar" style="width:88%">
              <p>HTML5 CSS3</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:60%">
              <p>JavaScript / Jquery</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:30%">
              <p>PHP / Laravel </p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:35%">
              <p>Git</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:70%">
              <p>Bootstrap3 / 4</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:75%">
              <p>SCSS</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:67%">
              <p>gulp </p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:72%">
              <p>PhpStorm / Visual Studio Code / Dreamweaver</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:82%">
              <p>Photoshop</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:68%">
              <p>Illustrator</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:75%">
              <p>Adobe XD </p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:82%">
              <p>Google Analytics / SEO</p>
            </div>
          </div>
          <div id="progress" class="graph">
            <div id="bar" style="width:87%">
              <p>backlog</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import service from "@/components/parts/Service";
import moveline from "@/components/parts/Moveline";

export default {
  name: "top",
  title: "Top", // title 追加
  description: " tomohisa ohsawaのポートフォリオサイト", // description 追加
  props: ["data"],
  components: {
    ser: service,
    moveline: moveline
  },
  data: function() {
    return {
      img1: require("../assets/img/top/image01.jpg"),
      img2: require("../assets/img/top/image02.jpg"),
      img3: require("../assets/img/top/image03.jpg"),
      img4: require("../assets/img/top/image04.jpg")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

 <style lang="scss" scoped>
#app {
  overflow: hidden;
  position: relative;
  min-height: 100%;
  height: auto !important;
  height: 100%;
}
.main {
  background: url(../assets/img/main.jpg) no-repeat;
  background-position: right center;
  width: 74%;
  height: 80vh;
  padding: 10vh;
  margin-left: auto;

  .title {
    margin-left: -16em;
  }
}

.top{
  position: relative;
}

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
  height: 23vh;
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
  h1 {
    margin-top: -2em;
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
  .skills {
    h2 {
      position: absolute;
      top: 3%;
      right: 7%;
      z-index: 3;
    }
    .wrap {
      margin-top: 3em;
      width: 80%;
    }
  }
}
</style>
