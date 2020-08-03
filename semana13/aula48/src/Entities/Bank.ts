import { IAccount } from "../Types";
import JSONFileManager from "./JSONFileManager";
import UserAccount from "./UserAccount";

class Bank {
    private readonly accounts: IAccount[];

    constructor(accounts: IAccount[]) {
        this.accounts = accounts;
    }

    public createAccount({
        cpf,
        name,
        age,
    }: Pick<IAccount, "cpf" | "name" | "age">): void {
        if (age > 17 && cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
            JSONFileManager.writeObjectToFile(new UserAccount(cpf, name, age));
        } else {
            console.log("Cheque os dados");
        }
    }

    public getAllAccounts(): IAccount[] {
        const db = JSONFileManager.getObjectFromFile();

        return db;
    }

    public getAccountByCpfAndName(
        cpf: string,
        name: string
    ): IAccount | undefined {
        const data = this.accounts.find(
            (account: IAccount) => account.name === name && account.cpf === cpf
        );

        return data;
    }
}

export default new Bank(JSONFileManager.getObjectFromFile());

const bd = new Bank(JSONFileManager.getObjectFromFile());

bd.createAccount({ cpf: "111.111.111-73", name: "gustaaaaaaaavbo", age: 22 });
