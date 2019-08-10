<template>
  <section class="about">
      <h2>About</h2>
      <div class="row bg">
        <ul>
          <li> 事業形態 : 個人事業主</li>
          <li> 事業内容 : WEBサイト制作</li>
          <li> 所在地 : 東京都</li>
        </ul>
      </div>
  </section>

</template>

<script>
  export default {
    name: "About"
  }
</script>

<style lang="scss" scoped>
  .about {
    position: relative;

    h2 {
      position: absolute;
      right: 10%;
      top: -30px;
    }


    ul {
      width: 100%;
      text-align: center;
      padding: 3em 0;

      li {
        display: block;
        height: 1em;
        padding: 2em 0 2em;

        &:last-child {
          padding-bottom: 4em;
        }

        &:first-child {
          padding-top: 4em;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .about {

      ul {
        padding: 0;
      }
    }
  }
</style>
