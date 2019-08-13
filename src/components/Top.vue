<template>
  <main>
    <mainblock></mainblock>
    <ser></ser>
    <works></works>
    <about></about>
    <toolskill></toolskill>
    <go-top></go-top>
  </main>
</template>

<script>
  import mainblock from "@/components/parts/Main";
  import service from "@/components/parts/Service";
  import works from "@/components/parts/top/Works";
  import about from "@/components/parts/top/About";
  import toolskill from "@/components/parts/top/ToolSkill";
  import GoTop from '@inotom/vue-go-top';

  export default {
    name: "top",
    title: "Top",
    description: " tomohisa ohsawaのポートフォリオサイト",
    props: ["data"],

    components: {
      mainblock: mainblock,
      ser: service,
      works: works,
      about: about,
      toolskill: toolskill,
      GoTop
    }

  };
</script>

<style lang="scss" scoped>
  .vue-go-top{
    background-color: #1390ff!important;
    outline: none;
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

  }
</style>
