import { FilterEpisode } from "./filter.episode";

export type QueryEpisodes = {
  page: number;
  filter?: FilterEpisode;
};
