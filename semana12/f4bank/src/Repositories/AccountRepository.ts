import { IUserAccount } from "../Types/Types";
import fs from "fs";
import { Transaction } from "../Models/TransactionModel";

class AccountRepositories {
    /////////////////////////////// Métodos privados de consulta e inserção no BD

    private async queryDatabase(): Promise<IUserAccount[]> {
        try {
            return JSON.parse(
                fs
                    .readFileSync(__dirname + "/../Database/database.json")
                    .toString()
            );
        } catch (error) {
            fs.writeFileSync(
                __dirname + "/../Database/database.json",
                JSON.stringify([])
            );

            return JSON.parse(
                fs
                    .readFileSync(__dirname + "/../Database/database.json")
                    .toString()
            );
        }
    }

    private async insertInDatabase(data: IUserAccount[]) {
        fs.writeFileSync(
            __dirname + "/../Database/database.json",
            JSON.stringify(data, null, 2)
        );
    }

    private async queryDataBaseAndcheckAccountExistence(CPF: string) {
        const dbQuery = await this.queryDatabase();
        const accountIndex = dbQuery.findIndex(
            (Account: IUserAccount) => Account.CPF === CPF
        );

        return accountIndex;
    }

    ///////////////////////////////////////////////////////////////////////

    public async queryDataBaseAndCreateAccount(schema: IUserAccount) {
        const dbQuery = await this.queryDatabase();
        const accountIndex = await this.queryDataBaseAndcheckAccountExistence(
            schema.CPF
        );

        if (accountIndex === -1) {
            dbQuery.push(schema);

            await this.insertInDatabase(dbQuery);
            console.log("\x1b[4m", "\x1b[36m", "Conta criada com sucesso");
        } else {
            throw new Error("O CPF já possui conta atrelada");
        }
    }

    public async queryDatabaseForUserBalance(CPF: string) {
        const dbQuery = await this.queryDatabase();
        const accountIndex = await this.queryDataBaseAndcheckAccountExistence(
            CPF
        );

        if (accountIndex !== -1) {
            console.log(
                `Olá, ${dbQuery[accountIndex].name} seu saldo é ${dbQuery[accountIndex].balance}`
            );
        } else {
            throw new Error("CPF não possui conta atrelada");
        }
    }

    public async queryDatabaseForDeposit({
        CPF,
        value,
    }: {
        CPF: string;
        value: number;
    }) {
        const dbQuery = await this.queryDatabase();
        const accountIndex = await this.queryDataBaseAndcheckAccountExistence(
            CPF
        );

        if (accountIndex !== -1 && value > 0) {
            dbQuery[accountIndex] = {
                ...dbQuery[accountIndex],
                balance: dbQuery[accountIndex].balance + value,
                history: [
                    ...dbQuery[accountIndex].history,
                    new Transaction({
                        amount: value,
                        description: `Depósito de R$${value}`,
                    }),
                ],
            };

            await this.insertInDatabase(dbQuery);

            console.log(
                "\x1b[4m",
                "\x1b[36m",
                `Olá, ${dbQuery[accountIndex].name} seu novo saldo é R$ ${dbQuery[accountIndex].balance}`
            );
        } else {
            throw new Error(
                "CPF não possui conta atrelada ou valor digitado é inválido"
            );
        }
    }

    public async queryDatabaseAndMakeTransaction({
        CPF,
        value,
        description,
        type,
        CPF2 = "Destination_CPF",
    }: {
        CPF: string;
        value: number;
        description: string;
        type: "payment" | "transference";
        CPF2?: string;
    }) {
        const dbQuery = await this.queryDatabase();
        const accountIndex = await this.queryDataBaseAndcheckAccountExistence(
            CPF
        );
        const accountIndex_destination = await this.queryDataBaseAndcheckAccountExistence(
            CPF2
        );

        if (
            accountIndex !== -1 &&
            dbQuery[accountIndex].balance > value &&
            value > 0 &&
            description
        ) {
            switch (
                type //reduce architecture
            ) {
                case "payment":
                    dbQuery[accountIndex] = {
                        ...dbQuery[accountIndex],
                        balance: dbQuery[accountIndex].balance - value,
                        history: [
                            ...dbQuery[accountIndex].history,
                            new Transaction({
                                amount: value,
                                description: description,
                            }),
                        ],
                    };

                    console.log("Conta paga com sucesso!");
                    this.insertInDatabase(dbQuery);
                    break;
                case "transference":
                    // Operação em ambas as contas da transação
                    if (accountIndex_destination !== -1) {
                        dbQuery[accountIndex] = {
                            ...dbQuery[accountIndex],
                            balance: dbQuery[accountIndex].balance - value,
                            history: [
                                ...dbQuery[accountIndex].history,
                                new Transaction({
                                    amount: value,
                                    description:
                                        description +
                                        ` (enviado para ${dbQuery[accountIndex_destination].name})`,
                                }),
                            ],
                        };

                        dbQuery[accountIndex_destination] = {
                            ...dbQuery[accountIndex_destination],
                            balance:
                                dbQuery[accountIndex_destination].balance +
                                value,
                            history: [
                                ...dbQuery[accountIndex_destination].history,
                                new Transaction({
                                    amount: value,
                                    description: `Transferência recebida de ${dbQuery[accountIndex].name}`,
                                }),
                            ],
                        };

                        console.log(
                            "\x1b[4m",
                            "\x1b[36m",
                            `Transferência para ${dbQuery[accountIndex_destination].name} concluída com sucesso`
                        );
                        this.insertInDatabase(dbQuery);
                    } else {
                        throw new Error("O CPF destinatário não existe");
                    }
                    break;
                default:
                    throw new Error("Transação não suportada");
            }
        } else {
            throw new Error(
                "CPF não possui conta atrelada ou a conta não possui saldo suficiente; certifique-se também se a data é válida e que o valor digitado é positivo\n Possivelmente algum parametro está ausente"
            );
        }
    }

    public async queryDatabaseForTransactions(CPF: string) {
        const dbQuery = await this.queryDatabase();
        const accountIndex = await this.queryDataBaseAndcheckAccountExistence(
            CPF
        );

        if (accountIndex !== -1) {
            console.log(
                "\x1b[36m",
                "\n\n" +
                    dbQuery[accountIndex].name +
                    ", eis a lista das suas transações:\n"
            );
            console.log(
                dbQuery[accountIndex].history.map((transaction) => {
                    return {
                        ...transaction,
                        amount: `R$ ${transaction.amount}`,
                    };
                })
            );
        } else {
            throw new Error("CPF inexistente na base de dados");
        }
    }
}

export default new AccountRepositories();
