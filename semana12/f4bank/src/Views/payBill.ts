import AccountController from "../Controllers/AccountController";
import { processData } from "../index";

AccountController.payBill(
    processData.slot1,
    Number(processData.slot2),
    processData.slot3
);
