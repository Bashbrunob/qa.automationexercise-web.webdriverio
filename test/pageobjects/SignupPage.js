const Page = require('./Page');

class SignupPage extends Page {

    // Seletores de Informações da Conta
    get radioTitleMr() { return $('#id_gender1'); }
    get radioTitleMrs() { return $('#id_gender2'); }
    get inputPassword() { return $('[data-qa="password"]'); }
    get selectDay() { return $('[data-qa="days"]'); }
    get selectMonth() { return $('[data-qa="months"]'); }
    get selectYear() { return $('[data-qa="years"]'); }
    get checkboxNewsletter() { return $('#newsletter'); }
    get checkboxPartners() { return $('#optin'); }

    // Seletores de Informações de Endereço
    get inputFirstName() { return $('[data-qa="first_name"]'); }
    get inputLastName() { return $('[data-qa="last_name"]'); }
    get inputCompany() { return $('[data-qa="company"]'); }
    get inputAddress1() { return $('[data-qa="address"]'); }
    get inputAddress2() { return $('[data-qa="address2"]'); }
    get selectCountry() { return $('[data-qa="country"]'); }
    get inputState() { return $('[data-qa="state"]'); }
    get inputCity() { return $('[data-qa="city"]'); }
    get inputZipcode() { return $('[data-qa="zipcode"]'); }
    get inputMobileNumber() { return $('[data-qa="mobile_number"]'); }
    get btnCreateAccount() { return $('[data-qa="create-account"]'); }

    /**
     * Preenche a seção de informações da conta
     */
    async fillAccountInformation(password, day, month, year) {
        await this.radioTitleMr.click();
        await this.inputPassword.setValue(password);
        await this.selectDay.selectByAttribute('value', day);
        await this.selectMonth.selectByAttribute('value', month);
        await this.selectYear.selectByAttribute('value', year);

        // Usa JavaScript click se o clique padrão for interceptado (comum com esses overlays)
        if (!(await this.checkboxNewsletter.isSelected())) {
            await this.checkboxNewsletter.click();
        }
        if (!(await this.checkboxPartners.isSelected())) {
            await this.checkboxPartners.click();
        }
    }

    /**
     * Preenche a seção de informações de endereço
     */
    async fillAddressInformation(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobile) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputCompany.setValue(company);
        await this.inputAddress1.setValue(address1);
        await this.inputAddress2.setValue(address2);
        await this.selectCountry.selectByVisibleText(country);
        await this.inputState.setValue(state);
        await this.inputCity.setValue(city);
        await this.inputZipcode.setValue(zipcode);
        await this.inputMobileNumber.setValue(mobile);
    }

    /**
     * Clica no botão de criar conta
     */
    async clickCreateAccount() {
        await this.btnCreateAccount.click();
    }
}

module.exports = new SignupPage();
