import { Place } from "./Place";

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,

        cep: string
    ) {
        super(cep);
    }

    get residents() {
        return this.residentsQuantity;
    }
}
