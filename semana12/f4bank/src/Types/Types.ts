interface IUserTransaction {
    id: string;
    amount: number;
    description: string;
    date: string;
}

interface IUserAccount {
    readonly name: string;
    readonly CPF: string;
    readonly birthdate: string;

    balance: number;

    history: IUserTransaction[];
}

export { IUserTransaction, IUserAccount };
