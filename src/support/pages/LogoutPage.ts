import { Page } from 'playwright';
import LogoutElements from '../elements/LogoutElements';
import BasePage from './BasePage';
import { expect } from 'playwright/test';

export default class LogoutPage extends BasePage {
  readonly logoutElements: LogoutElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.logoutElements = new LogoutElements(page);
  }

  async realizarLogout(): Promise<void> {
    await this.logoutElements.getDropdowntab().click();
    await this.logoutElements.getLogoutButton().click();
  }
}
