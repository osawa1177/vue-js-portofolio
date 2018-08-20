<template>
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
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style lang="scss" scoped>
/** Contents */
// .header-outer {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 9999;
// }

.site-title {
  font-size: 10px;
  display: block;
  padding-top: 2em;
  a {
    color: #000;
    &:hover {
      text-decoration: none;
    }
  }
}
.header-nav {
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      border-bottom-color: #000;
    }
  }
}
@media (min-width: 768px) {
  header,
  .header-nav {
    text-align: left;
  }

  .site-title {
    float: left;
    width: 50%;
    margin-top: 40px;
    margin-bottom: 0;
    margin-left: 100px;
    font-size: 1rem;
  }
  .header-nav {
    ul {
      display: flex;
      margin-right: 16px;
      list-style: none;
      padding-top: 5em;
    }
    a {
      display: inline-block;
      padding: 16px;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.3s;
    }
  }
  .header-sp {
    display: none;
  }
}
@media (max-width: 480px) {
  .header-pc {
    display: none;
  }
  .header-sp {
    #ham-menu {
      background-color: #fff; /*メニュー背景色*/
      box-sizing: border-box;
      height: 40%;
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
      background-color: rgba(255, 255, 255, 0.7); /*アイコン部分背景色*/
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
      margin-top: 0.2em;
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
