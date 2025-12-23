const Page = require('./Page');

class AccountPage extends Page {

    get messageAccountCreated() { return $('[data-qa="account-created"]'); }
    get messageAccountDeleted() { return $('[data-qa="account-deleted"]'); }
    get btnContinue() { return $('[data-qa="continue-button"]'); }

    // Item da barra de navegação
    get btnDeleteAccount() { return $('a[href="/delete_account"]'); }

    /**
     * Verifica se a mensagem de conta criada é exibida
     */
    async verifyAccountCreated() {
        await expect(this.messageAccountCreated).toBeDisplayed();
        await expect(this.messageAccountCreated).toHaveText('ACCOUNT CREATED!');
    }

    /**
     * Clica no botão continuar
     */
    async clickContinue() {
        await this.btnContinue.click();
    }

    /**
     * Clica no botão de deletar conta na barra de navegação
     */
    async clickDeleteAccount() {
        await this.btnDeleteAccount.click();
    }

    /**
     * Verifica se a mensagem de conta deletada é exibida
     */
    async verifyAccountDeleted() {
        await expect(this.messageAccountDeleted).toBeDisplayed();
        await expect(this.messageAccountDeleted).toHaveText('ACCOUNT DELETED!');
        await expect(this.btnContinue).toBeDisplayed();
    }
}

module.exports = new AccountPage();
