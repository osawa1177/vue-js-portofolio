<template>
  <div id="app">
    <moveline></moveline>
    <hnav></hnav>
    <transition name="fade">
      <router-view :data="myData"></router-view>
    </transition>
    <fnav></fnav>
  </div>
</template>

<script>

  import moveline from "@/components/parts/Moveline";
  import HeaderNav from "@/components/parts/NavHeader";
  import Footer from "@/components/parts/Footer";

  export default {
    name: "App",
    components: {
      hnav: HeaderNav,
      fnav: Footer,
      moveline: moveline
    },
    data: function () {
      return {
        imagePath: require("@/assets/img/logo.svg")
      };
    }
  };
</script>

