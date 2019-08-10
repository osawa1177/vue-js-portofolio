<template>
  <section>
    <transition name="fade">
      <div class="wrap relative">
        <h2 class="title">portfolio</h2>
        <div class="round-animation">
          <img class="img-center topBottom" :src="mainImage">
          <img :src="html">
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
  export default {
    name: "main",

    data: function () {
      return {
        mainImage: require("@/assets/img/top/main.png"),
      }
    }

  }

</script>


<style lang="scss">

  .title {
    position: absolute;
    left: 1%;
    top: 10%;

  }

  .round-animation {
    background-image: linear-gradient(120deg, #7ab8dfc2 0%, #1390ff 100%);
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    width: 700px;
    height: 100%;
    animation: morph 10s linear infinite;
    transform-style: preserve-3d;
    outline: 1px solid transparent;
    will-change: border-radius;
    margin: 0 auto;

    img {
      position: relative;
      z-index: 99;
    }

    &:before {
      animation: morph 3s linear infinite;
      opacity: .21;
      animation-duration: 1.5s;
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      will-change: border-radius, transform, opacity;
      anima: 0;
      background-image: linear-gradient(120deg, #7ab8dfc2 0%, #d6e7f7 100%);
    }

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      will-change: border-radius, transform, opacity;
      anima: 0;
      background-image: linear-gradient(120deg, #7ab8dfc2 0%, #d6e7f7 100%);
    }
  }


  .topBottom {
    animation: topBottom 5s infinite;
  }

  @keyframes morph {
    0%, 100% {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
      opacity: .89;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
  }

  @keyframes topBottom {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    50% {
      -webkit-transform: translate(0, 20px);
      transform: translate(0, 20px);
    }
    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }


</style>
