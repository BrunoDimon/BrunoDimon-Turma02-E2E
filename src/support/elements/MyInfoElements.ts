import { Locator, Page } from 'playwright';
import BaseElements from './BaseElements';

export default class MyInfoElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMiddleNameInput(): Locator {
    return this.page.locator('input[name="middleName"]');
  }

  getButtonSave(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getMessageOk(): Locator {
    return this.page.locator('.oxd-toast');
  }
}
