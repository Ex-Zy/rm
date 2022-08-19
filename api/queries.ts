import { gql } from "@apollo/client/core";

export const GET_CHARACTERS = gql`
  query ($page: Int = 1) {
    characters(page: $page) {
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
        type
        gender
        created
        location {
          dimension
        }
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query ($page: Int = 1) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
        characters {
          name
          status
        }
      }
    }
  }
`;
