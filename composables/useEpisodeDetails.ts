import { useGetOneEpisodesQuery } from "../graphql/generated";

const useEpisodeDetails = () => {
  const route = useRoute();
  const { result, loading, error } = useGetOneEpisodesQuery({
    id: String(route.params.id),
  });
  const episode = computed(() => result.value?.episode ?? {});

  return { episode, loading, error };
};

export default useEpisodeDetails;
