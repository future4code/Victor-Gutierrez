import fs from "fs";

class JSONFileManager {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public getObjectFromFile(): any {
        return JSON.parse(
            fs.readFileSync(__dirname + "/../Database/database.json").toString()
        );
    }

    public writeObjectToFile(objectToSave: any): void {
        fs.writeFileSync(
            __dirname + "/../Database/database.json",
            JSON.stringify(objectToSave)
        );
    }
}

export { JSONFileManager };
