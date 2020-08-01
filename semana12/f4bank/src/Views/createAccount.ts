import AccountController from "../Controllers/AccountController";

const processData = {
    slot1: String(process.argv[2]),
    slot2: String(process.argv[3]),
    slot3: String(process.argv[4]),
};

AccountController.createAccount(
    processData.slot1,
    processData.slot2,
    processData.slot3
);
