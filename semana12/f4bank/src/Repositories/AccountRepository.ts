import { IUserAccount } from "../Types/Types";
import fs from "fs";

class AccountRepositories {
    private async queryDatabase(): Promise<IUserAccount[]> {
        return JSON.parse(
            fs.readFileSync(__dirname + "/../Database/database.json").toString()
        );
    }

    async queryDataBaseAndCreateAccount(schema: IUserAccount) {
        const dbQuery = await this.queryDatabase();
        const checkExistence = dbQuery.findIndex(
            (Account: IUserAccount) => Account.CPF === schema.CPF
        );

        if (checkExistence === -1) {
            dbQuery.push(schema);

            fs.writeFileSync(
                __dirname + "/../Database/database.json",
                JSON.stringify(dbQuery, null, 2)
            );
        } else {
            throw new Error("O CPF já está cadastrado na base de dados");
        }
    }

    async queryDatabaseForUser({ CPF }: Pick<IUserAccount, "CPF">) {
        const dbQuery = await this.queryDatabase();
        const accountIndex = dbQuery.findIndex(
            (Account: IUserAccount) => Account.CPF === CPF
        );

        if (accountIndex !== -1) {
            console.log(
                `Olá, ${dbQuery[accountIndex].name} seu saldo é ${dbQuery[accountIndex].balance}`
            );
        } else {
            throw new Error("CPF não encontrado na base de dados");
        }
    }
}

export default new AccountRepositories();
