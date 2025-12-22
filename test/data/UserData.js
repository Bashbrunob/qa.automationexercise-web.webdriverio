class UserData {

    constructor() {
        const timestamp = new Date().getTime();
        this.name = `User${timestamp}`;
        this.email = `test_${timestamp}@example.com`;
        this.password = 'SecurePass123!';
        this.firstName = 'Automation';
        this.lastName = 'Senior';
        this.day = '15';
        this.month = '6';
        this.year = '1995';
        this.company = 'Senior QE Reference Corp';
        this.address1 = 'Rua da Qualidade, 100';
        this.address2 = 'Apto 101';
        this.country = 'United States';
        this.state = 'California';
        this.city = 'Silicon Valley';
        this.zipcode = '90210';
        this.mobile = '11999999999';
    }

    /**
     * Retorna uma nova instância de usuário com dados únicos
     */
    static getNewUser() {
        return new UserData();
    }
}

module.exports = UserData;
