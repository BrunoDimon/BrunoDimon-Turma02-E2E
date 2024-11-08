import { Locator, Page } from 'playwright';
import BaseElements from './BaseElements';

export default class CandidatesElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getAddButton(): Locator {
    return this.page.locator('button:has-text("Add")');
  }

  getFirstName(): Locator {
    return this.page.locator('input[name="firstName"]');
  }

  getMiddleName(): Locator {
    return this.page.locator('input[name="middleName"]');
  }

  getLastName(): Locator {
    return this.page.locator('input[name="lastName"]');
  }

  getEmailInput(): Locator {
    return this.page.locator('input[placeholder="Type here"]').nth(0);
  }

  getButtonSave(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getMessageOk(): Locator {
    return this.page.locator('.oxd-toast');
  }
}
