export type ID = string | number

export interface Character {
  id: ID
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode?: Episode
  created: string
}

export interface Episode {
  id: ID
  name: string
  air_date: string
  episode: string
  characters?: Character[]
  created: string
}

export interface Location {
  id: ID
  name: string
  type: string
  dimension: string
  residents?: Character[]
  created: string
}

export interface FilterCharacter {
  name: string
  status: string
  species: string
  type: string
  gender: string
}

export interface FilterEpisode {
  name: string
  episode: string
}

export interface BaseGrid {
  page: number
  updatePage(page: number): void
  increasePage(): void
  decreasePage(): void
}

export interface GridCharacters {
  page: number
  filter?: FilterCharacter
}

export interface GridEpisodes {
  page: number
  filter?: FilterEpisode
}

export type GridState = GridEpisodes | GridCharacters
export type GridFilter = FilterEpisode | FilterCharacter

export interface Grid extends BaseGrid {
  filter?: GridFilter
  update(params: GridState): void
  updateFilter(filter: GridFilter): void
  deleteFilter(): void
  clearFilter(): void
}
