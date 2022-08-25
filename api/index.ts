import { gql } from "@apollo/client/core";

const GET_CHARACTERS = gql`
  query ($page: Int = 1, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
          id
          dimension
        }
      }
    }
  }
`;

const GET_ONE_CHARACTER = gql`
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

const GET_EPISODES = gql`
  query ($page: Int = 1, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
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
          id
          name
          status
        }
      }
    }
  }
`;

const GET_ONE_EPISODE = gql`
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
          id
          dimension
          name
          type
          created
        }
      }
    }
  }
`;

export { GET_CHARACTERS, GET_ONE_CHARACTER, GET_EPISODES, GET_ONE_EPISODE };
