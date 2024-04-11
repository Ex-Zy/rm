export type ID = string | number

export type Character = {
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

export type Episode = {
  id: ID
  name: string
  air_date: string
  episode: string
  characters?: Character[]
  created: string
}

export type Location = {
  id: ID
  name: string
  type: string
  dimension: string
  residents?: Character[]
  created: string
}

export type FilterCharacter = {
  name: string
  status: string
  species: string
  type: string
  gender: string
}

export type FilterEpisode = {
  name: string
  episode: string
}

export interface BaseGrid {
  page: number
  updatePage(page: number): void
  increasePage(): void
  decreasePage(): void
}

export type GridCharacters = {
  page: number
  filter?: FilterCharacter
}

export type GridEpisodes = {
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
