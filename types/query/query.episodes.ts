import { FilterEpisode } from "../filter/filter.episode";

export type QueryEpisodes = {
  page: number;
  filter?: FilterEpisode;
};
