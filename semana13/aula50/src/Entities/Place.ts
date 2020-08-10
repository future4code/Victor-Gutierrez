export abstract class Place {
    constructor(protected cep: string) {}

    public get postalCode(): string {
        return this.cep;
    }
}

//Não pode ser instanciada. Place é uma classe abstrata.
