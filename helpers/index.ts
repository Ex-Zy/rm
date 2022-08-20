type CharacterStatus = "Alive" | "Dead" | "unknown";
type CharacterType = "success" | "danger" | "warning";

export const getCharacterType = (status: CharacterStatus) => {
  const statuses = {
    Alive: "success",
    Dead: "danger",
    unknown: "warning",
  };

  return statuses[status] as CharacterType;
};
