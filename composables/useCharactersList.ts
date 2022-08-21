import { useQuery } from "@vue/apollo-composable";
import { GET_CHARACTERS } from "@api/queries";

const useCharactersList = () => {
  const page = ref(1);
  const { result, loading, error } = useQuery(GET_CHARACTERS, { page });
  const characters = computed(() => result.value?.characters.results ?? []);
  const totalRows = computed(() => result.value?.characters.info.count || 0);
  const updateCharactersList = (newPage: number) => (page.value = newPage);

  return { characters, loading, error, totalRows, updateCharactersList };
};

export default useCharactersList;
