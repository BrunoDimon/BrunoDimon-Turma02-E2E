import { Page } from 'playwright';
import CandidatesElements from '../elements/CandidatesElements';
import BasePage from './BasePage';
import { expect } from 'playwright/test';
import MenuElements from '../elements/MenuElements';

export default class CandidatePage extends BasePage {
  readonly candidateElements: CandidatesElements;
  readonly menuElements: MenuElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.candidateElements = new CandidatesElements(page);
    this.menuElements = new MenuElements(page);
  }

  async gotoAddCandidates(): Promise<void> {
    await this.menuElements.getButtonRecruitment().click();
    await this.candidateElements.getAddButton().click();
    await expect(this.candidateElements.getFirstName()).toBeVisible();
  }

  async createCandidate(): Promise<void> {
    await this.candidateElements.getFirstName().fill('nome');
    await this.candidateElements.getMiddleName().fill('2nome');
    await this.candidateElements.getLastName().fill('ultimo nome');
    await this.candidateElements.getEmailInput().fill('email@teste.com');
    await this.candidateElements.getButtonSave().click();
    await expect(this.candidateElements.getMessageOk()).toBeVisible();
  }
}
