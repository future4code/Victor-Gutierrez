import { validateCPF } from "../Helpers/CPFValidator";
import { validateAge } from "../Helpers/AgeValidator";

import AccountRepository from "../Repositories/AccountRepository";

class AccountController {
    async createAccount(
        name: string,
        CPF: string,
        birthdate: string
    ): Promise<void> {
        try {
            await validateCPF(CPF);
            await validateAge(birthdate);

            await AccountRepository.queryDataBaseAndCreateAccount({
                name: name,
                CPF: CPF,
                birthdate: birthdate,
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async checkBalance(CPF: string): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseForUserBalance(CPF);
        } catch (error) {
            throw new Error(error);
        }
    }

    async deposit(CPF: string, amount: number): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseForDeposit({
                CPF,
                value: amount,
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async payBill(
        CPF: string,
        value: number,
        description: string
    ): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseAndMakeTransaction({
                CPF,
                value,
                description,

                type: "payment",
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async transferMoney(
        CPF: string,
        value: number,
        description: string,
        destinationCPF?: string
    ): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseAndMakeTransaction({
                CPF,
                value,
                description,
                type: "transference",
                CPF2: destinationCPF,
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async seeTransactions(CPF: string): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseForTransactions(CPF);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new AccountController();
