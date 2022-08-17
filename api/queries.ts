import { gql } from "@apollo/client/core";

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        gender
        created
      }
    }
  }
`;
