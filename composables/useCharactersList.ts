import { useGetCharactersQuery } from "../api/generated";
import type { GridState } from "@types";

const useCharactersList = <T extends GridState>(gridReactiveModel: T) => {
  const { result, loading, error } = useGetCharactersQuery(gridReactiveModel);

  return {
    loading,
    error,
    totalRecords: computed(() => result.value?.characters.info.count || 0),
    records: computed(() => result.value?.characters.results ?? []),
  };
};

export default useCharactersList;
