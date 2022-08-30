import { Character } from "./entity/entity.character";
import type { ID } from "./id";

export type Location = {
  id: ID;
  name: string;
  type: string;
  dimension: string;
  residents?: Character[];
  created: string;
};
