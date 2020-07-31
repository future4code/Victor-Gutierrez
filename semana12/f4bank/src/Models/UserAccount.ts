import { IUserAccount, IUserTransaction } from "../Types/Types";
import fs from "fs";

class UserAccount implements IUserAccount {
    name: string;
    CPF: string;
    birthdate: string;
    balance: number;
    history: IUserTransaction[];

    constructor(accountData: Omit<IUserAccount, "balance" | "history">) {
        Object.assign(this, accountData);

        fs.appendFile(
            __dirname + "/Database/users.json",
            JSON.stringify(UserAccount, null, 2),
            () => {
                console.log("New user Created in Database");
            }
        );
    }
}

export { UserAccount };
