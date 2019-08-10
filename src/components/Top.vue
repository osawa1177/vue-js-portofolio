<template>

  <div>
    <moveline></moveline>
    <mainblock></mainblock>
    <ser></ser>
    <works></works>
    <about></about>
    <toolskill></toolskill>

  </div>

</template>

<script>
  import mainblock from "@/components/parts/Main";
  import service from "@/components/parts/Service";
  import moveline from "@/components/parts/Moveline";
  import works from "@/components/parts/top/Works";
  import about from "@/components/parts/top/About";
  import toolskill from "@/components/parts/ToolSkill";

  export default {
    name: "top",
    title: "Top", // title 追加
    description: " tomohisa ohsawaのポートフォリオサイト",
    props: ["data"],

    components: {
      mainblock: mainblock,
      ser: service,
      moveline: moveline,
      works: works,
      about: about,
      toolskill: toolskill,
    }

  };
</script>

<style lang="scss" scoped>
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
