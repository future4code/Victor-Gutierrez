import User from "./User";

class Employee extends User {
    protected readonly admissionDate: string;
    protected baseSalary: number;
    static BENEFITS_VALUE = 400;

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password);
        Object.assign(this, { admissionDate, baseSalary });
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE;
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

export default Employee;
