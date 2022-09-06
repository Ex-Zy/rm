export interface BaseGrid {
  page: number;
  updatePage(page: number): void;
  increasePage(): void;
  decreasePage(): void;
}
