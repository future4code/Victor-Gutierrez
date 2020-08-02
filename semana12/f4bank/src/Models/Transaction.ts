import { IUserTransaction } from "../Types/Types";
import { v4 } from "uuid";
import moment from "moment";

class Transaction implements IUserTransaction {
    amount: number;
    date: string;
    description: string;
    id: string;

    constructor(amount: number, description: string) {
        this.id = v4();
        this.date = String(moment().format("DD/MM/YYYY [às] HH:mm"));
        this.description = description;
        this.amount = amount;

        return this;
    }
}

export { Transaction };
