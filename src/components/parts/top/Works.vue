<template>
  <section class="works wrap relative mt-6">
    <h2>Works</h2>
    <div class="d-flex">
      <figure>
        <router-link to="/works"><img :src="img1" class="img1"></router-link>
      </figure>
      <figure>
        <router-link to="/works"><img :src="img2" class="img2"></router-link>
      </figure>
      <figure class="text-right">
        <router-link to="/works"><img :src="img3" class="img3"></router-link>
      </figure>
    </div>
    <figure class="img-ab">
      <router-link to="/works"><img :src="img4" class="img4"></router-link>
    </figure>
  </section>

</template>

<script>
  export default {
    name: "Works",

    data: function () {
      return {
        img1: require("@/assets/img/top/image01.jpg"),
        img2: require("@/assets/img/top/image02.jpg"),
        img3: require("@/assets/img/top/image03.jpg"),
        img4: require("@/assets/img/top/image04.jpg")
      };
    }
  }
</script>

<style lang="scss" scoped>


  .works {
    height: 100%;
    padding: 3% 0 0;
    margin-bottom: 15em;

    h2 {
      position: absolute;
      right: 33%;
      margin-top: -1em;
    }

    .img1 {
      width: 78%;
    }

    .img2 {
      width: 70%;
    }

    .img3 {
      width: 81%;
    }

    .img4 {
      width: 47%;
    }

    .img-ab {
      position: absolute;
      right: 2%;
      bottom: -25%;
    }
  }

  @media (max-width: 480px) {
    .works {
      .img4 {
        width: 75%;
      }

      .img-ab {
        position: absolute;
        right: 8%;
        bottom: -60%;
        padding-bottom: 2em;
        margin-left: 13em;
      }

      h2 {
        right: 29%;
      }
    }
  }
</style>
