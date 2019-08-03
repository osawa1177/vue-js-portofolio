<template>
  <div id="app">
      <hnav></hnav>
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

  p {
    line-height: 1.9;
    text-align: justify
  }

  a {
    text-decoration: none
  }



</style>

