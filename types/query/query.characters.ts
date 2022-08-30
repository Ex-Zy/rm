import { FilterCharacter } from "../filter/filter.character";

export type QueryCharacters = {
  page: number;
  filter?: FilterCharacter;
};
