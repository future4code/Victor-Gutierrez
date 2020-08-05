import { IClient } from "../Types";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements IClient {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private readonly insdustryNumber: string, // tanto faz ser string ou number
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public get industryNumber(): string {
        return this.insdustryNumber;
    }

    public calculateBill(): number {
        const defaultTax = 0.45;
        const unitaryMachineDefaultTax = 100;
        return (
            this.consumedEnergy * defaultTax +
            this.machinesQuantity * unitaryMachineDefaultTax
        );
    }
}
