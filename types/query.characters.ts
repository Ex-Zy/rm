import { FilterCharacter } from "./filter.character";

export type QueryCharacters = {
  page: number;
  filter?: FilterCharacter;
};
