import { gql } from "@apollo/client/core";

export const INFO_FRAGMENT = gql`
  fragment InfoFields on Info {
    count
    pages
    next
    prev
  }
`;

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterFields on Character {
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
`;

export const EPISODE_FRAGMENT = gql`
  fragment EpisodeFields on Episode {
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
`;
