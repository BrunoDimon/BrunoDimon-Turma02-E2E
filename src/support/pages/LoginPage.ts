import { Page } from 'playwright';
import LoginElements from '../elements/LoginElements';
import BasePage from './BasePage';
import { expect } from 'playwright/test';
import MenuElements from '../elements/MenuElements';

export default class LoginPage extends BasePage {
  readonly loginElements: LoginElements;
  readonly menuElements: MenuElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
    this.menuElements = new MenuElements(page);
  }

  async preencherLogin(): Promise<void> {
    await this.loginElements.getUsername().fill('Admin');
    await this.loginElements.getPassword().fill('admin123');
    await this.loginElements.getBotaoLogin().click();
  }

  async preencherLoginInvalido(): Promise<void> {
    await this.loginElements.getUsername().fill('Admin');
    await this.loginElements.getPassword().fill('admin1234');
    await this.loginElements.getBotaoLogin().click();
  }

  async validarLoginSucesso(): Promise<void> {
    await expect(this.menuElements.getButtonMyInfo()).toBeVisible();
  }
}
