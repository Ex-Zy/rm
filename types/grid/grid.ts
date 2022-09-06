import { FilterEpisode } from "types/filter/filter.episode";
import { FilterCharacter } from "types/filter/filter.character";
import { BaseGrid } from "./base.grid";

export type GridCharacters = {
  page: number;
  filter?: FilterCharacter;
};

export type GridEpisodes = {
  page: number;
  filter?: FilterEpisode;
};

export type GridState = GridEpisodes | GridCharacters;
export type GridFilter = FilterEpisode | FilterCharacter;

export interface Grid extends BaseGrid {
  filter?: GridFilter;
  update(params: GridState): void;
  updateFilter(filter: GridFilter): void;
  deleteFilter(): void;
  clearFilter(): void;
}
