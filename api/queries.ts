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

export const GET_ONE_CHARACTER = gql`
  query ($id: ID = 1) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      created
      location {
        id
        dimension
        name
        type
        created
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

export const GET_ONE_EPISODE = gql`
  query ($id: ID = 1) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      created
      characters {
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
          name
          type
          created
        }
      }
    }
  }
`;
