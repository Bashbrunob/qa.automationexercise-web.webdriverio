const Page = require('./Page');

class HomePage extends Page {
    /**
     * define os seletores usando métodos getter
     */
    get btnSignupLogin() {
        return $('a[href="/login"]');
    }

    get homeLogo() {
        return $('img[alt="Website for automation practice"]');
    }

    open() {
        return super.open('/');
    }

    /*
     * Clica no botão de Login/Cadastro na barra de navegação
     */
    async clickSignupLogin() {
        await this.btnSignupLogin.click();
    }
}

module.exports = new HomePage();
