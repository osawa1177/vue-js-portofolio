<template>
  <form @submit="submit">
    <v-text-field placeholder="title" v-model="title"></v-text-field>
    <v-text-field placeholder="Director" v-model="director"></v-text-field>
    <v-text-field placeholder="composer" v-model="composer"></v-text-field>
    <v-text-field placeholder="release_date" v-model="release_date"></v-text-field>
    <v-btn class="ma-2" tile outlined color="success">
      <input class="button-primary" type="submit" value="Send">
    </v-btn>
  </form>
</template>

<script>
  import {InMemoryCache} from "apollo-cache-inmemory";
  import { ADD_MOVIE } from '@/../apollo/mutations'


  export default {
    name: "AddMovie",
    data() {
      return {
        title: "",
        director: "",
        composer: "",
        release_date: "",
      }
    },
    apollo: {},
    methods: {
      submit(e) {
        e.preventDefault();
        const {title, director, composer, release_date } = this.$data;
        this.$apollo.mutate({
          mutation: ADD_MOVIE,
          variables: {
            title,
            director,
            composer,
            release_date
          },
          refetchQueries: ["getMovies"]
        })
      }
    }
  }
</script>
