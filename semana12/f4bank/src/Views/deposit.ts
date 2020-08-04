import AccountController from "../Controllers/AccountController";
import { processData } from "../index";

AccountController.deposit(processData.slot1, Number(processData.slot2));
