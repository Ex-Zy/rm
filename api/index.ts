import { gql } from "@apollo/client/core";
import { CHARACTER_FRAGMENT, EPISODE_FRAGMENT, PAGINATION_FRAGMENT } from "./fragments";

const GET_CHARACTERS = gql`
  ${PAGINATION_FRAGMENT}
  ${CHARACTER_FRAGMENT}
  query GetCharacters($page: Int = 1, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        ...PaginationFields
      }
      results {
        ...CharacterFields
      }
    }
  }
`;

const GET_ONE_CHARACTER = gql`
  ${CHARACTER_FRAGMENT}
  query GetOneCharacter($id: ID = 1) {
    character(id: $id) {
      ...CharacterFields
    }
  }
`;

const GET_EPISODES = gql`
  ${PAGINATION_FRAGMENT}
  ${EPISODE_FRAGMENT}
  query GetEpisodes($page: Int = 1, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        ...PaginationFields
      }
      results {
        ...EpisodeFields
      }
    }
  }
`;

const GET_ONE_EPISODE = gql`
  ${EPISODE_FRAGMENT}
  query GetOneEpisodes($id: ID = 1) {
    episode(id: $id) {
      ...EpisodeFields
    }
  }
`;

export { GET_CHARACTERS, GET_ONE_CHARACTER, GET_EPISODES, GET_ONE_EPISODE };
