interface IUserTransaction {
    id: string;
    amount: number;
    dscription: string;
}

interface IUserAccount {
    name: string;
    CPF: string;
    age: number;
    birthdate: Date;

    balance: number;

    history: IUserTransaction[];
}

export { IUserTransaction, IUserAccount };
