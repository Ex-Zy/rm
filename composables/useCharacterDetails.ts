import { useGetOneCharacterQuery } from "../graphql/generated";

const useCharacterDetails = () => {
  const route = useRoute();
  const { result, loading, error } = useGetOneCharacterQuery({
    id: String(route.params.id),
  });

  const character = computed(() => result.value?.character ?? {});

  return { character, error, loading };
};

export default useCharacterDetails;
