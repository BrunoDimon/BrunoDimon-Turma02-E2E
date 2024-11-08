import { Locator, Page } from 'playwright';
import BaseElements from './BaseElements';

export default class MenuElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  /* getButtonMyInfo(): Locator {
        return this.page.locator('span[text=My Info]');
    } */

  getButtonMyInfo(): Locator {
    return this.page.locator('a[href*="viewMyDetails"]');
  }

  getButtonRecruitment(): Locator {
    return this.page.locator('a[href*="viewRecruitmentModule"]');
  }

  getButtonAdmin(): Locator {
    return this.page.locator('text=Admin');
  }

  getButtonPerformance(): Locator {
    return this.page.locator('text=Performance');
  }

  getButtonMaintenance(): Locator {
    return this.page.locator('text=Maintenance');
  }
}
