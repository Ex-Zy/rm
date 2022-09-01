import { gql } from "@apollo/client/core";
import { PAGINATION_FRAGMENT, CHARACTER_FRAGMENT } from "../fragments/graphql.fragments";

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

export { GET_CHARACTERS, GET_ONE_CHARACTER };
