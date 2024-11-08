import test from 'playwright/test';
import LoginPage from '../support/pages/LoginPage';
import MyInfoPage from '../support/pages/MyInfoPage';
import LogoutPage from '../support/pages/LogoutPage';

test.describe('Alterar o telefone pessoal para contato', () => {
  let loginPage: LoginPage;
  let myInfoPage: MyInfoPage;
  let logoutPage: LogoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    myInfoPage = new MyInfoPage(page);
    logoutPage = new LogoutPage(page);
    await page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    await loginPage.preencherLogin();
    await loginPage.validarLoginSucesso();
  });

  test('Adicionar telefone para contato', async () => {
    await myInfoPage.gotoMyInfoPage();
    await myInfoPage.mobileContact();
  });

  test.afterEach(async () => {
    await logoutPage.realizarLogout();
  });
});
