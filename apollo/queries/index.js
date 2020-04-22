import gql from 'graphql-tag';

export const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            title
            director
            composer
            release_date
        }
    }`;

export default {
  GET_MOVIES
}