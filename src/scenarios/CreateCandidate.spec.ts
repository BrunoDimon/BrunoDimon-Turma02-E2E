import test from 'playwright/test';
import LoginPage from '../support/pages/LoginPage';
import MyInfoPage from '../support/pages/MyInfoPage';
import LogoutPage from '../support/pages/LogoutPage';
import CandidatePage from '../support/pages/CandidatePage';

test.describe('Cria candidato', () => {
  let loginPage: LoginPage;
  let candidatePage: CandidatePage;
  let logoutPage: LogoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    candidatePage = new CandidatePage(page);
    logoutPage = new LogoutPage(page);
    await page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    await loginPage.preencherLogin();
    await loginPage.validarLoginSucesso();
  });

  test('Cria o candidato', async () => {
    await candidatePage.gotoAddCandidates();
    await candidatePage.createCandidate();
  });

  test.afterEach(async () => {
    await logoutPage.realizarLogout();
  });
});
