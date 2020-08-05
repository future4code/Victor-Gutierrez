export abstract class Place {
    constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep;
    }
}

//Não pode ser instanciada. Place é uma classe abstrata.