<template>
  <div class="moveline-block">
    <span class="moveline moveline-normal moveline-1"></span>
    <span class="moveline moveline-normal moveline-2"></span>
    <span class="moveline moveline-normal moveline-3"></span>
    <span class="moveline moveline-normal moveline-4"></span>
    <span class="moveline moveline-normal moveline-5"></span>
    <span class="moveline moveline-normal moveline-6"></span>
    <span class="moveline moveline-normal moveline-7"></span>
    <span class="moveline moveline-normal moveline-8"></span>
    <span class="moveline moveline-normal moveline-9"></span>
    <span class="moveline moveline-normal moveline-10"></span>
    <span class="moveline moveline-accent"></span>
  </div>

</template>


<style lang="scss">

  .moveline {
    display: block;
    position: absolute;
    top: -100px;
    width: 1px;
    height: 107%;
    z-index: -2;

    &-block {
      overflow: hidden;
      position: absolute;
      left: 0;
      width: 100%;
      height: 107%;
      z-index: -2;
    }

    &-normal {
      background-color: #ebecf5;
      transform: rotate(15deg);
    }

    &-accent {
      left: 80%;
      animation: movelineAccent 20s linear infinite;
      background-color: #7ab8df;
      transform: rotate(-15deg)
    }

  &-1 {
    left: 95%;
    animation: moveline1 50s linear infinite
  }

  &-2 {
    left: 88%;
    animation: moveline1 45s linear infinite
  }

  &-3 {
    left: 75%;
    animation: moveline3 40s linear infinite
  }

  &-4 {
    left: 71%;
    animation: moveline4 40s linear infinite
  }

  &-5 {
    left: 70%;
    animation: moveline5 30s linear infinite
  }

  &-6 {
    left: 68%;
    animation: moveline6 50s linear infinite
  }

  &-7 {
    left: 40%;
    animation: moveline7 35s linear infinite
  }

  &-8 {
    left: 26%;
    animation: moveline8 40s linear infinite
  }

  &-9 {
    left: 24%;
    animation: moveline9 40s linear infinite
  }

  &-10 {
    left: 10%;
    animation: moveline10 35s linear infinite
  }

  }
  @keyframes moveline1 {
    0% {
      left: 90%
    }
    10% {
      left: 110%
    }
    55% {
      left: -10%
    }
    100% {
      left: 90%
    }
  }

  @keyframes moveline2 {
    0% {
      left: 88%
    }
    40% {
      left: -10%
    }
    80% {
      left: 110%
    }
    100% {
      left: 88%
    }
  }

  @keyframes moveline3 {
    0% {
      left: 75%
    }
    20% {
      left: 110%
    }
    65% {
      left: -10%
    }
    100% {
      left: 75%
    }
  }

  @keyframes moveline4 {
    0% {
      left: 71%
    }
    25% {
      left: 110%
    }
    75% {
      left: -10%
    }
    100% {
      left: 71%
    }
  }

  @keyframes moveline5 {
    0% {
      left: 70%
    }
    40% {
      left: 20%
    }
    80% {
      left: 110%
    }
    100% {
      left: 70%
    }
  }

  @keyframes moveline6 {
    0% {
      left: 68%
    }
    25% {
      left: 100%
    }
    75% {
      left: -10%
    }
    100% {
      left: 68%
    }
  }

  @keyframes moveline7 {
    0% {
      left: 40%
    }
    20% {
      left: -10%
    }
    80% {
      left: 80%
    }
    100% {
      left: 40%
    }
  }

  @keyframes moveline8 {
    0% {
      left: 26%
    }
    25% {
      left: 78%
    }
    75% {
      left: 10%
    }
    100% {
      left: 26%
    }
  }

  @keyframes moveline9 {
    0% {
      left: 24%
    }
    30% {
      left: -10%
    }
    60% {
      left: 94%
    }
    100% {
      left: 24%
    }
  }

  @keyframes moveline10 {
    0% {
      left: 10%
    }
    10% {
      left: 0%
    }
    50% {
      left: 68%
    }
    100% {
      left: 10%
    }
  }

  @keyframes movelineAccent {
    0% {
      background-color: #7ab8df
    }
    35% {
      background-color: #bfdf7a
    }
    70% {
      background-color: #df7a7a
    }
    100% {
      background-color: #7ab8df
    }
  }

</style>
