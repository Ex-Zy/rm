import { gql } from "@apollo/client/core";
import { PAGINATION_FRAGMENT, EPISODE_FRAGMENT } from "../fragments/graphql.fragments";

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

export { GET_EPISODES, GET_ONE_EPISODE };
