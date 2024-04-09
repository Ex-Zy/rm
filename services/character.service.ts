type CharacterStatus = "Alive" | "Dead" | "unknown";
type CharacterType = "success" | "danger" | "warning";

export default class CharacterService {
  public static transformStatusIntoType(
    status: CharacterStatus,
  ): CharacterType {
    const statuses = {
      Alive: "success",
      Dead: "danger",
      unknown: "warning",
    };

    return statuses[status] as CharacterType;
  }
}
