export interface IClient {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}
