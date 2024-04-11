import type { BaseGrid } from '@types'

class BaseGridModel implements BaseGrid {
  public page: number

  public constructor(page: number) {
    this.page = page
  }

  /* Start Page region */
  public updatePage(page: number): void {
    this.page = page
  }
  public increasePage(): void {
    this.page++
  }
  public decreasePage(): void {
    this.page--
  }
  /* End Page region */
}

export default BaseGridModel
