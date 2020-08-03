interface ITransaction {
    date: string;
    value: number;
    description: string;
}

interface IAccount {
    name: string;
    age: number;
    balance: number;
    cpf: string;
    transactions: ITransaction[];
}
