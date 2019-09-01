<template>
  <main class="mt-16">
    <mainblock></mainblock>
    <ser v-scroll="Scroll" class="slideInBottom_slow"></ser>
    <works v-scroll="Scroll" class="slideInBottom_slow"></works>
    <about v-scroll="Scroll" class="slideInBottom_slow"></about>
    <toolskill v-scroll="Scroll" class="slideInBottom_slow"></toolskill>
  </main>
</template>

<script>
  import mainblock from "@/components/parts/Main";
  import service from "@/components/parts/top/Service";
  import works from "@/components/parts/top/Works";
  import about from "@/components/parts/top/Experiences";
  import toolskill from "@/components/parts/top/ToolSkill";
  import MixinScroll from '@/components/mixin/scroll';

  export default {
    name: "top",
    title: "Top",
    description: " tomohisa ohsawaのポートフォリオサイト",
    props: ["data"],
    mixins: [MixinScroll],
    components: {
      mainblock: mainblock,
      ser: service,
      works: works,
      about: about,
      toolskill: toolskill,
    },

    methods: {
      Scroll: (evt, el) => {
        let top = el.getBoundingClientRect().top;
        if (window.scrollY > top + window.pageYOffset - 600) {
          el.classList.add("in-screen");
          return true;
        }
        return false;
      },
    }

  };
</script>

<style lang="scss" scoped>

  .mt-16{
    margin-top: 16rem;
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
