import { useQuery } from "@vue/apollo-composable";
import { GET_EPISODES } from "../api";
import { QueryEpisodes } from "types/query/query.episodes";

const useEpisodesList = (query: QueryEpisodes) => {
  const variables = reactive({ ...query, ...(query.filter && { filter: { ...query.filter } }) });
  const { result, loading, error } = useQuery(GET_EPISODES, variables);
  const episodes = computed(() => result.value?.episodes.results ?? []);
  const totalRows = computed(() => result.value?.episodes.info.count || 0);
  const updateEpisodesList = (params: QueryEpisodes) => {
    if (params.page) variables.page = params.page;
    if (params.filter) variables.filter = params.filter;
  };

  return { episodes, loading, error, totalRows, updateEpisodesList };
};

export default useEpisodesList;
