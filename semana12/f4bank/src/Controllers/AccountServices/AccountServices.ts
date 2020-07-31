import { IUserAccount } from "../../Types/Types";
import { validateCPF } from "../../Helpers/CPFValidator";
import { validateAge } from "../../Helpers/AgeValidator";
import { UserAccount } from "../../Models/UserAccount";

class AccountService {
    async createAccount(
        accountData: Omit<IUserAccount, "balance" | "history">
    ): Promise<void> {
        try {
            await validateCPF(accountData.CPF);
            await validateAge(accountData.birthdate);

            new UserAccount({
                name: accountData.name,
                CPF: accountData.CPF,
                birthdate: accountData.birthdate,
            });
        } catch (error) {
            throw new Error(error);
        }
    }
}
