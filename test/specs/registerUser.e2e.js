const HomePage = require('../pageobjects/HomePage');
const LoginPage = require('../pageobjects/LoginPage');
const SignupPage = require('../pageobjects/SignupPage');
const AccountPage = require('../pageobjects/AccountPage');
const UserData = require('../data/UserData');

describe('Fluxo de Cadastro de Usuário', () => {

    // Dados dinâmicos e isolados
    const usuario = UserData.getNewUser();

    beforeEach(async () => {
        await HomePage.open();
        await expect(browser).toHaveUrl(browser.options.baseUrl + '/');
        await expect(HomePage.homeLogo).toBeDisplayed();
    });

    it('Caso de Teste 1: Registrar Usuário', async () => {
        //Navegar para Login/Cadastro
        await HomePage.clickSignupLogin();
        await expect(browser).toHaveTitleContaining('Automation Exercise - Signup / Login');

        //Inserir nome e e-mail para cadastro
        await LoginPage.signup(usuario.name, usuario.email);

        //Preencher Detalhes da Conta
        await expect(browser).toHaveTitleContaining('Automation Exercise - Signup');
        await SignupPage.fillAccountInformation(
            usuario.password,
            usuario.day,
            usuario.month,
            usuario.year
        );

        // AÇÃO: Preencher Detalhes de Endereço
        await SignupPage.fillAddressInformation(
            usuario.firstName,
            usuario.lastName,
            usuario.company,
            usuario.address1,
            usuario.address2,
            usuario.country,
            usuario.state,
            usuario.city,
            usuario.zipcode,
            usuario.mobile
        );

        // AÇÃO: Criar Conta
        await SignupPage.clickCreateAccount();

        // VALIDAÇÃO: Verificar Conta Criada
        await AccountPage.verifyAccountCreated();

        // AÇÃO: Continuar
        await AccountPage.clickContinue();

        // Verificar se estamos logados - A barra de navegação muda para "Logged in as X"
        // (Passo opcional mas boa prática)
        await expect($('//*[contains(text(), "Logged in as")]')).toBeDisplayed();

        // AÇÃO: Deletar Conta
        await AccountPage.clickDeleteAccount();

        // VALIDAÇÃO: Verificar Conta Deletada
        await AccountPage.verifyAccountDeleted();

        // AÇÃO: Continuar Final (para finalizar o fluxo conforme caso de teste)
        await AccountPage.clickContinue();

        // Verificação final: deve voltar para a home
        await expect(HomePage.homeLogo).toBeDisplayed();
    });
});
