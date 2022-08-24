import { Character } from "./character";
import type { ID } from "./id";

export type Episode = {
  id: ID;
  name: string;
  air_date: string;
  episode: string;
  characters?: Character[];
  created: string;
};
