const Page = require('./Page');

class LoginPage extends Page {

    get inputSignupName() {
        return $('[data-qa="signup-name"]');
    }

    get inputSignupEmail() {
        return $('[data-qa="signup-email"]');
    }

    get btnSignup() {
        return $('[data-qa="signup-button"]');
    }

    /**
     * Realiza a ação de cadastro usando nome e e-mail
     * @param {string} name - Nome do usuário
     * @param {string} email - Endereço de e-mail do usuário
     */
    async signup(name, email) {
        await this.inputSignupName.setValue(name);
        await this.inputSignupEmail.setValue(email);
        await this.btnSignup.click();
    }
}

module.exports = new LoginPage();
