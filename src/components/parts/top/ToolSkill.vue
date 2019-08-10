<template>
  <section class="skills relative wrap">
    <h2>Tool & Skills</h2>
    <div class="wrap mt-6 mb-6 skill-wrap">
      <div class="tool-skill-block d-flex flex-wrap space-between ">

        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="html"></div>
          <div class="chart-block">
            <div class="chart-item chart-90">
            </div>
          </div>
          <div class="tool-skill-name">HTML5</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="css"></div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">CSS</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="photoshop">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Photoshop</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="illustrator">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-60">
            </div>
          </div>
          <div class="tool-skill-name">Illustrator</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="xd">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Adobe XD</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="javascript">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-60">
            </div>
          </div>
          <div class="tool-skill-name">javascript</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="jquery">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">jqery</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="vue">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-50">
            </div>
          </div>
          <div class="tool-skill-name">Vue.js</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="php">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-20">
            </div>
          </div>
          <div class="tool-skill-name">PHP</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="laravel">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-20">
            </div>
          </div>
          <div class="tool-skill-name">Laravel</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="git">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Git</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="bootstrap">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Bootstrap</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="sass">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Scss</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="gulp">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Gulp</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="vscode">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">vscode</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="intelij">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Intelij</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="googleanalytics">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Googleanalytics</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="seo">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">SEO</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="design">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">UI/UXデザイン</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img"><img :src="backlog">
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Backlog</div>
        </div>

      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "ToolSkill",

    data: function () {
      return {
        html: require("@/assets/img/toolskill/html.png"),
        css: require("@/assets/img/toolskill/css.png"),
        photoshop: require("@/assets/img/toolskill/photoshop.png"),
        illustrator: require("@/assets/img/toolskill/illustrator.png"),
        xd: require("@/assets/img/toolskill/xd.png"),
        javascript: require("@/assets/img/toolskill/javascript.png"),
        jquery: require("@/assets/img/toolskill/jquery.png"),
        vue: require("@/assets/img/toolskill/vue.png"),
        php: require("@/assets/img/toolskill/php.png"),
        laravel: require("@/assets/img/toolskill/laravel.png"),
        git: require("@/assets/img/toolskill/git.png"),
        bootstrap: require("@/assets/img/toolskill/bootstrap.png"),
        sass: require("@/assets/img/toolskill/sass.png"),
        gulp: require("@/assets/img/toolskill/gulp.png"),
        vscode: require("@/assets/img/toolskill/vscode.png"),
        intelij: require("@/assets/img/toolskill/intelij.jpg"),
        googleanalytics: require("@/assets/img/toolskill/googleanalytics.png"),
        seo: require("@/assets/img/toolskill/seo.png"),
        design: require("@/assets/img/toolskill/design.png"),
        backlog: require("@/assets/img/toolskill/backlog.png"),
      };
    }
  }
</script>

<style lang="scss" scoped>

  .chart-block {
    width: 80%;
    height: 1em;
    position: relative;
    margin: 0 auto;
    background-color: #eef3f7;
  }

  .chart-item {
    background-color: #59b1ff;
    left: 0;
    position: absolute;
    height: 1rem;
  }

  .chart-100 {
    width: 100%;
  }

  .chart-90 {
    width: 90%;
  }

  .chart-80 {
    width: 80%;
  }

  .chart-70 {
    width: 70%;
  }

  .chart-60 {
    width: 60%;
  }

  .chart-50 {
    width: 50%;
  }

  .chart-40 {
    width: 40%;
  }

  .chart-30 {
    width: 30%;
  }

  .chart-20 {
    width: 20%;
  }

  .chart-10 {
    width: 10%;
  }

  .skill-wrap {
    max-width: 900px;
  }

  .tool-skill-block {

    &:before {
      content: "";
      display: block;
      width: 21.5%;
      order: 1;
    }

    &:after {
      content: "";
      display: block;
      width: 21.5%;
      order: 1;
    }
  }

  .tool-skill-item {
    width: 21.5%;
    margin-bottom: 1.5em;
    padding: 1.6em 0.8em 1.3em;
    text-align: center;
    font-weight: bold;
    border: solid 1px #edf2f7;
    border-radius: 4px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.18);
    background: #fff;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.18);
    }
  }

  .tool-skill-img {
    width: 54px;
    height: 54px;
    overflow: hidden;
    margin: 0 auto 1em;
  }

  .tool-skill-name {
    line-height: 1.4;
    font-size: 0.95em;
    margin-top: .5rem;
  }

  .skills {
    padding-top: 7vh;
    height: 100%;
    position: relative;
  }

  h2 {
    position: absolute;
    font-size: 2em;
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 1em;
    font-weight: 900;
    left: 0;
    margin-top: -1em;
  }

  @media (max-width: 480px) {

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
