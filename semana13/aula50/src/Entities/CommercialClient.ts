import { Commerce } from "./Commerce";
import { IClient } from "../Types";

class CommercialClient extends Commerce implements IClient {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private readonly cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        const defaultTax = 0.53;
        return this.consumedEnergy * defaultTax;
    }

    public get cadastroPessoaJuridica(): string {
        return this.cnpj;
    }
}
