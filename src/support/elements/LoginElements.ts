import { Locator, Page } from 'playwright';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getUsername(): Locator {
    return this.page.locator('input[name="username"]');
  }

  getPassword(): Locator {
    return this.page.locator('input[name="password"]');
  }

  getBotaoLogin(): Locator {
    return this.page.locator('button[type="submit"]');
  }
}
