import { useGetEpisodesQuery } from '../api/generated'
import type { GridState } from '@types'

const useEpisodesList = <T extends GridState>(gridReactiveModel: T) => {
  const { result, loading, error } = useGetEpisodesQuery(gridReactiveModel)

  return {
    loading,
    error,
    totalRecords: computed(() => result.value?.episodes?.info?.count ?? 0),
    records: computed(() => result.value?.episodes?.results ?? []),
  }
}

export default useEpisodesList
