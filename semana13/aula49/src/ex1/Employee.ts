import User from "./User";

class Employee extends User {
    protected admissionDate: string;
    protected baseSalary: number;

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, name, email, password);
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + 400;
    }
}

const employee = new Employee(
    "?",
    "aaa@mail.com",
    "Diogo Defante",
    "123123123123",
    "12/12/2012",
    400
);
