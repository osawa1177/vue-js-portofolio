<template>
  <section class="works wrap relative mt-6">
    <h2>Works</h2>

    <div class="works-block wrap">

      <div class="works-col-1">
        <div class="works-item">
          <figure>
            <router-link to="/works"><img :src="img1"></router-link>
          </figure>
        </div>
        <div class="works-item">

        </div>

      </div>
      <div class="works-col-2">
        <div class="works-item">
          <figure>
            <router-link to="/works"><img :src="img4"></router-link>
          </figure>
        </div>
        <div class="works-item">
          <figure>
            <router-link to="/works"><img :src="img2"></router-link>
          </figure>
        </div>
      </div>

      <div class="works-col-3">
        <div class="works-item">
          <figure class="text-right">
            <router-link to="/works"><img :src="img3"></router-link>
          </figure>
        </div>
        <div class="works-item">

        </div>

      </div>


    </div>

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
  .works-block {
    display: flex;
    min-height: 830px;
  }
  .works-col-1 {
    align-self: flex-end;
    width: 100%;
    margin-right: 25px;
  }
  .works-col-2 {
    align-self: center;
    width: 100%;
    margin-right: 25px;
  }

  .works-col-3 {
    align-self: flex-start;
    width: 100%;
  }
  .works-item {
    width: 100%;
    height: 332.5px;
  }

  .works {
    height: 100%;
    padding: 3% 0 0;
    margin-bottom: 5em;

    h2 {
      position: absolute;
      left: 0;
      margin-top: -1em;
    }


    .img-ab {
      position: absolute;
      right: 2%;
      bottom: -25%;
    }
  }

  @media (max-width: 480px) {
    .works {

      h2{
        font-size: 1.3em;
      }

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
    }

    .works-block{
     min-height: 350px;
    }

    .works-item{
     height: 100px;
    }


  }
</style>
