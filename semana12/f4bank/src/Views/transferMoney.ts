import AccountController from "../Controllers/AccountController";
import { processData } from "../index";

AccountController.transferMoney(
    processData.slot1,
    Number(processData.slot2),
    processData.slot3,
    processData.slot4
);
