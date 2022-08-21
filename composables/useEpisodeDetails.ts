import { useQuery } from "@vue/apollo-composable";
import { GET_ONE_EPISODE } from "@api/queries";

const useEpisodeDetails = () => {
  const route = useRoute();
  const { result, loading, error } = useQuery(GET_ONE_EPISODE, { id: route.params.id });
  const episode = computed(() => result.value?.episode ?? {});

  return { episode, loading, error };
};

export default useEpisodeDetails;
