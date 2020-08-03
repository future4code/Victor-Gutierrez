export interface ITransaction {
    date: string;
    value: number;
    description: string;
}

export interface IAccount {
    name: string;
    age: number;
    balance: number;
    cpf: string;
    transactions: ITransaction[];
}
