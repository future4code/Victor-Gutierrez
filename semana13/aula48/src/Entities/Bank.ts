import JSONFileManager

class Bank {
    private accounts: Account[];
    private fileManager: JSONFileManager;

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts;
        this.fileManager = fileManager;
    }

    public createAccount(userAccount: UserAccount): void {
        //lógica de criar conta aqui
    }

    public getAllAccounts(): UserAccount[] {
        //lógica de pegar todas as contas aqui
    }

    public getAccountByCpfAndName(
        cpf: string,
        name: string
    ): UserAccount | undefined {
        // lógica de pegar conta pelo CPF e Nome aqui
    }
}
