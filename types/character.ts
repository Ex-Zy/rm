import type { ID } from "./id";
import type { Location } from "./location";
import type { Episode } from "./episode";

export type Character = {
  id: ID;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode?: Episode;
  created: string;
};
