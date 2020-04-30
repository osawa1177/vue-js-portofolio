<template>
  <main class="sub-wrap work-stop relative mt-20">
    <p> {{ doubleCounter }}</p>
    <button @click="increment">+ 1</button>
    <button @click="decrement">- 1</button>
  </main>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters([ "doubleCounter"])
    },
    methods: {
      increment() {
        this.$store.state.count++
      },
      decrement() {
        this.$store.state.count--
      }
    }
  }
</script>
