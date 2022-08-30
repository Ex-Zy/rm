import { gql } from "@apollo/client/core";

export const INFO_FRAGMENT = gql`
  fragment InfoFields on Info {
    count
    pages
    next
    prev
  }
`;

export const LOCATION_FRAGMENT = gql`
  fragment LocationFields on Location {
    id
    dimension
    name
    type
    created
  }
`;

export const CHARACTER_FRAGMENT = gql`
  ${LOCATION_FRAGMENT}

  fragment CharacterFields on Character {
    id
    name
    status
    species
    type
    gender
    image
    created
    location {
      ...LocationFields
    }
  }
`;

export const EPISODE_FRAGMENT = gql`
  ${CHARACTER_FRAGMENT}

  fragment EpisodeFields on Episode {
    id
    name
    air_date
    episode
    created
    characters {
      ...CharacterFields
    }
  }
`;
