import User from "./User";

class Customer extends User {
    public readonly purchaseTotal: number;
    private readonly creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
        this.purchaseTotal = 0;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const costumer = new Customer(
    "?",
    "aaa@mail.com",
    "Diogo Defante",
    "123123123123",
    "213231231231231223"
);

console.log(costumer.introduceYourself());

//ex2 a) 1 b) 2 por que Costumer é descendente de User
