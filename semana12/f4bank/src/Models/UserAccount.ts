import { IUserAccount, IUserTransaction } from "../Types/Types";
import fs from "fs";
import { queryDataBaseForUserAccount } from "../Repositories/UserAccountRepository";

class UserAccount implements IUserAccount {
    name: string;
    CPF: string;
    birthdate: string;
    balance: number;
    history: IUserTransaction[];

    constructor(accountData: Omit<IUserAccount, "balance" | "history">) {
        this.name = accountData.name;
        this.CPF = accountData.CPF;
        this.birthdate = accountData.birthdate;
        this.balance = 0;
        this.history = [];

        const schema = {
            name: this.name,
            CPF: this.CPF,
            birthdate: this.birthdate,
            balance: this.balance,
            history: this.history,
        };

        queryDataBaseForUserAccount(schema);
    }
}

export { UserAccount };
