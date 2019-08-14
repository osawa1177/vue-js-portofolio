<template>
  <div id="app">
    <moveline></moveline>
    <hnav></hnav>
    <transition name="fade">
      <router-view :data="myData"></router-view>
    </transition>
    <fnav></fnav>
    <go-top></go-top>
  </div>
</template>

<script>

  import moveline from "@/components/parts/Moveline";
  import HeaderNav from "@/components/parts/NavHeader";
  import Footer from "@/components/parts/Footer";
  import GoTop from '@inotom/vue-go-top';

  export default {
    name: "App",
    components: {
      hnav: HeaderNav,
      fnav: Footer,
      moveline: moveline,
      GoTop,
    },

    data: function () {
      return {
        imagePath: require("@/assets/img/logo.svg")
      };
    },

  }
</script>
<style>

  .vue-go-top{
    background-color: #1390ff!important;
    outline: none;
  }
</style>

