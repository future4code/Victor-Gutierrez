import fs from "fs";

class JSONFileManager {
    public getObjectFromFile(): any {
        try {
            return JSON.parse(
                fs
                    .readFileSync(__dirname + "/../Database/database.json")
                    .toString()
            );
        } catch {
            fs.writeFileSync(
                __dirname + "/../Database/database.json",
                JSON.stringify([], null, 2)
            );
        }
    }

    public writeObjectToFile(objectToSave: any): void {
        try {
            fs.writeFileSync(
                __dirname + "/../Database/database.json",
                JSON.stringify([...this.getObjectFromFile(), objectToSave])
            );
        } catch (error) {
            fs.writeFileSync(
                __dirname + "/../Database/database.json",
                JSON.stringify(objectToSave, null, 2)
            );
        }
    }
}

export default new JSONFileManager();
