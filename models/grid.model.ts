import { Grid, GridState, GridFilter } from "types/grid/grid";
import BaseGridModel from "./base.grid.model";

class GridModel extends BaseGridModel implements Grid {
  public filter?: GridFilter;

  public constructor(gridParams: GridState) {
    const { page, filter } = gridParams;

    super(page);
    filter && Object.assign(this, { filter });
  }

  /* Start Common region */
  public update(gridParams: GridState): void {
    Object.assign(this, { ...gridParams });
  }
  /* End Common region */

  /* Start Filter region */
  public updateFilter(filter: GridFilter): void {
    if (!this.filter) return;
    this.filter = filter;
  }
  public deleteFilter(): void {
    delete this.filter;
  }
  public clearFilter(): void {
    if (!this.filter) return;

    for (const [key, value] of Object.entries(this.filter)) {
      if (typeof value === "string") {
        this.filter[key] = "";
      } else if (typeof value === "boolean") {
        this.filter[key] = false;
      }
    }
  }
  /* End Filter region */
}

export default GridModel;
