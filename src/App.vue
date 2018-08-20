<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <p class="site-title"><router-link to="/"> <img :src="imagePath"></router-link></p>
      </header>
      <hnav></hnav>
    </div>
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
    // 追加
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
<style lang="scss" scoped>
.header-outer {
  margin-bottom: 1em;
     max-width: 1200px;
    margin: 0 auto;
    height: 200px;
}
.site-title {
  float: left;
  width: 50%;
  margin-top: 40px;
  margin-bottom: 0;
  margin-left: 100px;
  font-size: 1rem;
  padding-top: 2em;
  img {
    width: 60%;
  }
}
@media (max-width: 480px) {
  .site-title {
    float: none;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 0;
    margin-left: 10px;
    font-size: 1rem;
  }
}
</style>
