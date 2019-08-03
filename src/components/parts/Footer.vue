<template>
  <footer class="wrap">
    <nav class="footer-nav">
      <div>
        <img :src="logo" alt="tomohisa.osawa-logo" class="footer-logo">
      </div>
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
        <li>
          <a href="https://github.com/ohsawa1177/vue-js-portofolio" target="_blank"><img
            :src="github"></a>
        </li>
      </ul>
    </nav>
    <span class="copy">© 2019 © tomohisa ohsawa All rights reserved.</span>

  </footer>
</template>
<script>
  export default {
    data: function () {
      return {
        github: require("../../assets/img/github.png"),
        logo: require("../../assets/img/logo.svg")
      };
    }
  };
</script>

<style lang="scss">

  .footer-logo {
    width: 100px;
  }

  .footer-nav {
    display: flex;
    justify-content: space-between;

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        border-bottom-color: #000;
      }
    }
  }

  @media (min-width: 768px) {

    .footer-outer:after {
      content: "";
      display: block;
      overflow: hidden;
    }

    .footer-nav {
      text-align: left;
      height: 8em;
      padding-top: 4em;
      padding-bottom: 8em;
      border-top: 1px solid #ccc;
      margin-top: 3rem;

      ul {
        display: flex;
        list-style: none;
        margin-bottom: 5em;
        align-items: center;

        :last-child {
          margin-right: 0;
        }
      }

      li {
        display: inline-block;
        margin: 0 10px;

      }

      a {
        display: inline-block;
        border-bottom: 3px solid transparent;
        transition: border-bottom 0.3s;
      }
    }
    .copy {
      font-size: 0.5em;
      display: block;
      text-align: right;
      margin: -3rem 0rem 2rem;
    }
  }

  @media (max-width: 480px) {
    .copy {
      font-size: 0.3em;
      margin-top: 1em;
    }
  }
</style>
