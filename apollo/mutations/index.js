import gql from 'graphql-tag'

export const ADD_MOVIE = gql`
    mutation addMovie(
        $title: String!
        $director: String!
        $composer: String!
        $release_date: date!
    ){
        insert_movies(
            objects: [
                {
                    title: $title
                    director: $director
                    composer: $composer
                    release_date: $release_date
                }
            ]
        ) {
            returning{
                id
            }
        }
    }
`;

export default {
  ADD_MOVIE
}