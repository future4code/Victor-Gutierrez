import { IUserTransaction } from "../Types/Types";
import { v4 } from "uuid";
import moment from "moment";

class Transaction implements IUserTransaction {
    amount: number;
    date: string;
    description: string;
    id: string;

    constructor(
        transactionData: Pick<IUserTransaction, "amount" | "description">
    ) {
        this.id = v4();
        Object.assign(this, transactionData);
        this.date = String(moment().format("DD/MM/YYYY [às] HH:mm"));
        return this;
    }
}

export { Transaction };
