class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: ITransaction[];

    constructor(cpf: string, name: string, age: number) {
        Object.assign(this, { cpf, name, age });
    }

    public getBalance(): number {
         
    }

    public addBalance(value: number): void {
        //Aqui deve ser inserida a lógica de adicionar saldo
        console.log("Saldo atualizado com sucesso");
    }
}
