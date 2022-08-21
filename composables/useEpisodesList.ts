import { useQuery } from "@vue/apollo-composable";
import { GET_EPISODES } from "@api/queries";

const useEpisodesList = () => {
  const page = ref(1);
  const { result, loading, error } = useQuery(GET_EPISODES, { page });
  const episodes = computed(() => result.value?.episodes.results ?? []);
  const totalRows = computed(() => result.value?.episodes.info.count || 0);
  const updateEpisodesList = (newPage: number) => (page.value = newPage);

  return { episodes, loading, error, totalRows, updateEpisodesList };
};

export default useEpisodesList;
