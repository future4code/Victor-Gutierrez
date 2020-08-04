import JSONFileManager from "./JSONFileManager";
import { IAccount, ITransaction } from "../Types";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: ITransaction[];

    constructor(cpf: string, name: string, age: number) {
        Object.assign(this, { cpf, name, age });
        this.transactions = [];
        this.balance = 0;
    }

    public getBalance(): number {
        const db = JSONFileManager.getObjectFromFile();

        const data = db.find(
            (account: IAccount) => account.balance === this.balance
        );

        return data.balance;
    }

    public addBalance(value: number): void {
        const db = JSONFileManager.getObjectFromFile();

        const dataIndex = db.findIndex(
            (account: IAccount) => account.cpf === this.cpf
        );

        db[dataIndex] = {
            ...db[dataIndex],
            balance: db[dataIndex].balance + value,
        };

        JSONFileManager.writeObjectToFile(db);

        console.log("Saldo atualizado com sucesso");
    }
}

export default UserAccount;
