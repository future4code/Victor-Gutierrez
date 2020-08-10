import { IClient } from "../Types/index";

const Client: IClient = {
    name: "Victor",
    registrationNumber: 1234123,
    consumedEnergy: 22,
    calculateBill: () => 2,
};

console.log(Client);
