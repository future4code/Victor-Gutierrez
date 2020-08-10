import { IClient } from "../Types";
import { CommercialClient } from "./CommercialClient";
import { ResidentialClient } from "./ResidentialClient";

export class ClientManager {
    private readonly clients: IClient[] = [];

    public validadeCPFandCNPJ(cadastro: string) {
        if (
            cadastro.match(
                /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
            )
        ) {
            return true;
        } else {
            return false;
        }
    }

    public registerClient(
        clientToRegister: ResidentialClient | CommercialClient
    ): void {
        const clientIndex = this.clients.findIndex(
            (client) =>
                client.registrationNumber ===
                clientToRegister.registrationNumber
        );

        if (clientIndex > -1) {
            throw "Cliente já existente";
        } else if (
            clientIndex === -1 &&
            this.validadeCPFandCNPJ(clientToRegister.cadastroPessoa)
        ) {
            this.clients.push(clientToRegister);
        } else {
            throw "Houve um erro";
        }
    }

    public calculateClientBill(registrationNumber: number): number {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber;
        });

        if (foundClient) {
            return foundClient.calculateBill();
        } else {
            return 0;
        }
    }

    public calculateTotalIncome(): number {
        return this.clients.reduce(
            (totalIncome, clientTax) => totalIncome + clientTax.calculateBill(),
            0
        );
    }

    public deleteClient(clientRegistrationNumber: number) {
        const clientIndex = this.clients.findIndex(
            (client) => client.registrationNumber === clientRegistrationNumber
        );
        if (clientIndex > -1) {
            this.clients.splice(clientIndex, 1);
        } else {
            throw "Cliente inexistente";
        }
    }

    public get allClients(): string[] {
        return this.clients.map((client) => {
            return `${client.name} - ${client.registrationNumber} - ${
                client.consumedEnergy
            }kWh - R$ ${client.calculateBill()}`;
        });
    }

    public get clientsQuantity(): number {
        return this.clients.length;
    }
}
