import AccountController from "../Controllers/AccountController";
import { processData } from "../index";

AccountController.createAccount(
    processData.slot1,
    processData.slot2,
    processData.slot3
);
