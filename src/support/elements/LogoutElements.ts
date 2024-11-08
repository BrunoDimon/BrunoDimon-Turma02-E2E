import { Locator, Page } from 'playwright';
import BaseElements from './BaseElements';

export default class LogoutElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getDropdowntab(): Locator {
    return this.page.locator('li[class="oxd-userdropdown"]');
  }

  getLogoutButton(): Locator {
    return this.page.locator('a[href*="logout"]');
  }
}
