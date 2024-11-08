import { Page } from 'playwright';
import MenuElements from '../elements/MenuElements';
import BasePage from './BasePage';
import { expect } from 'playwright/test';
import MyInfoElements from '../elements/MyInfoElements';

export default class MyInfoPage extends BasePage {
  readonly menuElements: MenuElements;
  readonly myInfoElements: MyInfoElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.menuElements = new MenuElements(page);
    this.myInfoElements = new MyInfoElements(page);
  }

  async gotoMyInfoPage(): Promise<void> {
    await this.menuElements.getButtonMyInfo().click();
    await expect(this.myInfoElements.getMiddleNameInput()).toBeVisible();
  }

  async mobileContact(): Promise<void> {
    await this.myInfoElements.getMiddleNameInput().fill('dimon');
    await this.myInfoElements.getButtonSave().click();
    await expect(this.myInfoElements.getMessageOk()).toBeVisible();
  }
}
