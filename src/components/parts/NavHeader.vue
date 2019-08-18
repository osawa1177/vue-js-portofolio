<template>

  <header v-scroll="Scroll">
    <div class="wrap d-flex justify-content-between">
      <h1 class="site-title">
        <router-link to="/"><img :src="logo" alt="tomohisa.osawa-logo" class=""></router-link>
      </h1>

      <nav class="header-nav">
        <ul class="header-pc">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/works">Works</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <a href="http://osawa-tomohisa.under.jp/blog">Blog</a>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
        <div class="header-sp">
          <input id="menu-cb" type="checkbox" value="off">
          <label id="menu-icon" for="menu-cb">≡</label>
          <label id="menu-background" for="menu-cb"></label>
          <div id="ham-menu">
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/works">Works</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <a href="http://osawa-tomohisa.under.jp/blog">Blog</a>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>

  import MixinScroll from '@/components/mixin/scroll';
  export default {
  mixins: [MixinScroll],

  data: function () {
    return {
      logo: require("@/assets/img/logo.svg"),
      hiddenClass: {},
    };
  },
    methods: {
      Scroll: (evt, el) => {
        let top = el.getBoundingClientRect().top;
        if (window.scrollY > 200) {
          el.classList.add("in-screen");
        } else  {
          window.scrollY > 0
          el.classList.remove("in-screen");
        }
      },
    }

  }
  ;
</script>

<style lang="scss" scoped>

  header {
    width: 100%;
    z-index: 3;
  }

  .in-screen {
    background-color: rgba(255,255,255, 0.5);
    position: fixed;
    transform-origin: 0 0;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(1);


    h1{
      width: 10%;
      padding-top: 1rem;
      padding-bottom: .5rem;
      transform: translateY(0%);
      transition: all 0.5s;
    }

    .header-nav ul{
      padding-top: 0rem;
    }
  }

  .router-link-exact-active {
    border-bottom: 3px solid #1390ff;
  }

  a {
    color: #1a1a1a;

    &:hover {
      text-decoration: none;
    }
  }

  .header-nav {
    a {
      color: #1a1a1a;
      text-decoration: none;

      &:hover {
        border-bottom-color: #1390ff;
        transition: background-color 0.5s, color 0.5s, border 0.5s;

      }
    }
  }

  .site-title {
    width: 40%;
    margin-bottom: 0;
    padding-top: 4em;
    font-size: 10px;
    display: block;

    img {
      width: 60%;
    }

    a {
      color: #1a1a1a;
      border: none;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .header-nav {
    text-align: left;
  }

  .header-nav {
    ul {
      display: flex;
      list-style: none;
      padding-top: 1.5em;
    }

    a {
      display: inline-block;
      padding: 16px;
      transition: border-bottom 0.3s;
    }
  }

  .header-sp {
    display: none;
  }


  @media (max-width: 480px) {

    .in-screen {

      h1{
        width: 15%;
      }
    }


    .site-title {
      float: none;
      width: 80%;
      margin-top: 5px;
      margin-bottom: 0;
      margin-left: 10px;
      font-size: 1rem;
    }

    .header-nav .header-pc {
      display: none;
    }
    .header-nav .header-sp {
      display: block;
    }

    .header-nav ul {
      flex-wrap: wrap;
    }

    .header-sp {
      #ham-menu {
        background-color: #fff; /*メニュー背景色*/
        box-sizing: border-box;
        padding: 10px 40px; /*メニュー内左右上下余白*/
        position: fixed;
        right: -200px; /*メニュー横幅 width と合わせる*/
        top: -5px;
        transition: transform 0.3s linear 0s; /*0.3s はアニメーションにかかる時間*/
        width: 200px; /*メニュー横幅*/
        z-index: 1000;
        margin-top: 0.2em;

        ul {
          li {
            padding: 1em;
          }
        }
      }

      #menu-background {
        background-color: #333; /*黒背景*/
        display: block;
        height: 100%;
        opacity: 0;
        position: fixed;
        right: 0;
        top: 0;
        transition: all 0.3s linear 0s; /*0.3s はアニメーションにかかる時間*/
        width: 100%;
        z-index: -1;
      }

      #menu-icon {
        color: #333; /*アイコン（フォント）色*/
        cursor: pointer;
        display: block;
        font-size: 50px; /*アイコン（フォント）サイズ*/
        height: 50px; /*アイコン縦高さ*/
        line-height: 50px; /*縦位置中央化*/
        position: fixed;
        right: 0;
        text-align: center;
        top: 0;
        width: 50px; /*アイコン横幅*/
        transition: all 0.3s linear 0s; /*0.3s はアニメーションにかかる時間*/
        z-index: 1000;
      }

      #menu-cb {
        display: none; /*チェックボックス本体は消しておく*/
      }

      #menu-cb:checked ~ #ham-menu,
      #menu-cb:checked ~ #menu-icon {
        transform: translate(-200px); /*メニュー本体横幅 width と合わせる*/
      }

      #menu-cb:checked ~ #menu-background {
        opacity: 0.2;
        z-index: 999;
      }
    }
  }
</style>
