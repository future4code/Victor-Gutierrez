import { IClient } from "../Types";

export class ClientManager {
    private readonly clients: IClient[] = [];

    public registerClient(client: IClient): void {
        this.clients.push(client);
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

    public get clientsQuantity(): number {
        return this.clients.length;
    }
}
