import Employee from "./Employee";

class Seller extends Employee {
    private salesQuantity = 0;
    static SELLING_COMMISSION = 5;

    public get sales() {
        return this.salesQuantity;
    }

    public set newSales(amount: number) {
        this.salesQuantity += amount;
    }
    public calculateTotalSalary(): number {
        return (
            this.baseSalary +
            Employee.BENEFITS_VALUE +
            Seller.SELLING_COMMISSION * 5
        );
    }
}

const seller = new Seller(
    "Seller",
    "Leila",
    "aaa@aaa.com",
    "12314",
    "14/12/2012",
    300
);

console.log(seller);
