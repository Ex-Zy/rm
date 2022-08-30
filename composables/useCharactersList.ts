import { useQuery } from "@vue/apollo-composable";
import { GET_CHARACTERS } from "../api";
import { QueryCharacters } from "types/query/query.characters";

const useCharactersList = (query: QueryCharacters) => {
  const variables = reactive({ ...query, ...(query.filter && { filter: { ...query.filter } }) });
  const { result, loading, error } = useQuery(GET_CHARACTERS, variables);
  const characters = computed(() => result.value?.characters.results ?? []);
  const totalRows = computed(() => result.value?.characters.info.count || 0);
  const updateCharactersList = (params: QueryCharacters) => {
    if (params.page) variables.page = params.page;
    if (params.filter) variables.filter = params.filter;
  };

  return { characters, loading, error, totalRows, updateCharactersList };
};

export default useCharactersList;
