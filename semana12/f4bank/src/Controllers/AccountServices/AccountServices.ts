import { IUserAccount } from "../../Types/Types";
import { validateCPF } from "../../Helpers/CPFValidator";
import { validateAge } from "../../Helpers/AgeValidator";
import { UserAccount } from "../../Models/UserAccount";
import AccountRepository from "../../Repositories/AccountRepository";

class AccountService {
    async createAccount({
        name,
        CPF,
        birthdate,
    }: Omit<IUserAccount, "balance" | "history">): Promise<void> {
        try {
            await validateCPF(CPF);
            await validateAge(birthdate);

            new UserAccount({
                name: name,
                CPF: CPF,
                birthdate: birthdate,
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async checkBalance({ CPF }: Pick<IUserAccount, "CPF">) {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseForUser({ CPF: CPF });
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new AccountService();

const aaa = new AccountService();

aaa.checkBalance({ CPF: "111.111.111-88" });
