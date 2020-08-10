import { Residence } from "./Residence";
import { IClient } from "../Types/index";

export class ResidentialClient extends Residence implements IClient {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private readonly cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public get cadastroPessoa(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        const defaultTax = 0.75;
        return this.consumedEnergy * defaultTax;
    }
}
