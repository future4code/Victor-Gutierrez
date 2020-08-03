import { IUserAccount, IUserTransaction } from "../Types/Types";

class UserAccount implements IUserAccount {
    name: string;
    CPF: string;
    birthdate: string;
    balance: number;
    history: IUserTransaction[];

    constructor(accountData: Omit<IUserAccount, "balance" | "history">) {
        Object.assign(this, accountData);
        this.balance = 0;
        this.history = [];

        return this;
    }
}

export { UserAccount };
