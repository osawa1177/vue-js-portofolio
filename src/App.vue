<template>
  <div id="app">
      <hnav></hnav>
    <moveline></moveline>
    <transition name="fade">
      <router-view :data="myData"></router-view>
    </transition>
    <fnav></fnav>
  </div>
</template>
<script>
import HeaderNav from "@/components/parts/NavHeader";
import Footer from "@/components/parts/Footer";
export default {
  name: "App",
  components: {
    hnav: HeaderNav,
    fnav: Footer
  },
  data: function() {
    return {
      imagePath: require("./assets/img/logo.svg")
    };
  }
};
</script>

<style>
  body {
    text-size-adjust: 100%;
    font-smoothing: antialiased;
    text-rendering: auto;
    font-size: 15px;
    font-family: 'Noto Sans JP', "Yu Gothic", "YuGothic", "Hiragino Kaku Gothic Pro", "Meiryo", verdana, "Osaka", "MS PGothic", Sans-Serif;    font-weight: normal;
    color: #1a1a1a;
    letter-spacing: 0.02em;
    background-color: #fff
  }

  p {
    line-height: 1.9;
    text-align: justify
  }

  a {
    text-decoration: none
  }



</style>

