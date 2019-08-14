
<script>
import Vue from 'vue'
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
</script>

<style>

  @keyframes bounce-in {
    0% {
      transform: scale(0)
    }
    50% {
      transform: scale(1.5)
    }
    to {
      transform: scale(1)
    }
  }

  .slideInLeft {
    transition: opacity 1s, visibility 1s;
    opacity: 0;
    visibility: hidden
  }

  .slideInLeft_slow.in-screen {
    opacity: 1;
    visibility: visible;
    animation: slideInLeft .4s
  }

  @keyframes slideInLeft {
    0% {
      transform: translate(-100%)
    }
    to {
      transform: translate(0) ease-out
    }
  }

  .slideInLeft_slow {
    transition: opacity 1s, visibility 1s;
    opacity: 0;
    visibility: hidden
  }

  .slideInLeft_slow.in-screen {
    opacity: 1;
    visibility: visible;
    animation: slideInLeft_slow .9s
  }

  @keyframes slideInLeft_slow {
    0% {
      transform: translate(-100%)
    }
    to {
      transform: translate(0) ease-out
    }
  }

  .slideInRight {
    transition: opacity 1s, visibility 1s;
    opacity: 0;
    visibility: hidden
  }

  .slideInRight.in-screen {
    opacity: 1;
    visibility: visible;
    animation: slideInRight .4s
  }

  @keyframes slideInRight {
    0% {
      transform: translate(100%)
    }
    to {
      transform: translate(0) ease-out
    }
  }

  .slideInRight_slow {
    transition: opacity 2s, visibility 2s;
    opacity: 0;
    visibility: hidden
  }

  .slideInRight_slow.in-screen {
    opacity: 1;
    visibility: visible;
    animation: slideInRight .9s
  }

  @keyframes slideInRight_slow {
    0% {
      transform: translate(100%)
    }
    to {
      transform: translate(0) ease-out
    }
  }

  .slideInBottom {
    transition: opacity 1s, visibility 1s;
    opacity: 0;
    visibility: hidden
  }

  .slideInBottom.in-screen {
    opacity: 1;
    visibility: visible;
    animation: slideInBottom .4s
  }

  @keyframes slideInBottom {
    0% {
      transform: translateY(100%)
    }
    to {
      transform: translate(0) ease-out
    }
  }

  .slideInBottom_slow {
    transition: opacity 2s, visibility 2s;
    opacity: 0;
    visibility: hidden
  }

  .slideInBottom_slow.in-screen {
    opacity: 1;
    visibility: visible;
    animation: slideInBottom .9s
  }

  @keyframes slideInBottom_slow {
    0% {
      transform: translateY(100%)
    }
    to {
      transform: translate(0) ease-out
    }
  }

  .fadeIn {
    transition: opacity 1s, visibility 1s;
    opacity: 0;
    visibility: hidden
  }

  .fadeIn.in-screen {
    opacity: 1;
    visibility: visible
  }

  .fadeInFast {
    transition: opacity .5s, visibility .5s;
    opacity: 0;
    visibility: hidden
  }

  .fadeInFast.in-screen {
    opacity: 1;
    visibility: visible
  }


</style>
