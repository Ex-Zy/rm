import { useQuery } from "@vue/apollo-composable";
import { GET_ONE_CHARACTER } from "@api";

const useCharacterDetails = () => {
  const route = useRoute();
  const { result, loading, error } = useQuery(GET_ONE_CHARACTER, {
    id: route.params.id,
  });

  const character = computed(() => result.value?.character ?? {});

  return { character, error, loading };
};

export default useCharacterDetails;
