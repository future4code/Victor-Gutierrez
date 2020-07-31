interface IUserTransaction {
    id: string;
    amount: number;
    dscription: string;
}

interface IUserAccount {
    name: string;
    CPF: string;
    birthdate: string;

    balance: number;

    history: IUserTransaction[];
}

export { IUserTransaction, IUserAccount };
