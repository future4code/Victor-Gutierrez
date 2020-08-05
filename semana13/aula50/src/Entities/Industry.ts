import { Place } from "./Place";

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,

        cep: string
    ) {
        super(cep);
    }

    get machines() {
        return this.machinesQuantity;
    }
}
