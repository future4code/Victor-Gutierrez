import { IUserAccount } from "../Types/Types";
import fs from "fs";

const queryDataBaseForUserAccount = (schema: IUserAccount) => {
    const dbQuery = JSON.parse(
        fs.readFileSync(__dirname + "/../Database/users.txt").toString()
    );

    dbQuery.push(schema);

    fs.writeFileSync(
        __dirname + "/../Database/users.txt",
        JSON.stringify(dbQuery, null, 2)
    );
};

export { queryDataBaseForUserAccount };
