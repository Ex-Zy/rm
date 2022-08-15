import { gql } from "@apollo/client/core";

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`;
