<template>
  <main class="sub-wrap work-stop relative mt-20">
    <movie-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-item>
    <add-movie></add-movie>
  </main>
</template>

<script>
  import MovieItem from "@/components/parts/MovieItem";
  import AddMovie from "./parts/AddMovie";
  import { GET_MOVIES } from '@/../apollo/queries'

  export default {
    name: "MoviesList",
    components: {AddMovie, MovieItem},
    data() {
      return {
        movies:[]
      }
    },
    apollo: {
      movies: GET_MOVIES
    },
    async mounted() {
      try {
        await this.$apollo.query({
          query: GET_MOVIES,
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
