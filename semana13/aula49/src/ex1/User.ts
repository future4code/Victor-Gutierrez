class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(id: string, email: string, name: string, password: string) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public getId(): string {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getName(): string {
        return this.name;
    }
}

const user = new User("?", "agg@mail.com", "user", "12345551123");

// ex1 => a) não b) 1 vez
console.log(user);

export default User;
