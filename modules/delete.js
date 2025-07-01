import { readFile, writeFile } from "node:fs";
import { readFilePromise, writeFilePromise } from "./fileHelpers.js";

export function delete_s(id) {
    const filePath = 'C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt';
    return readFilePromise(filePath)
        .then((data) => {
            let arrayData = JSON.parse(data);
            const index = arrayData.findIndex(item => item.Id === id);
            if (index !== -1) {
                arrayData.splice(index, 1);
            }
            else {
                throw new Error("Id not found!")
            }
            return writeFilePromise(filePath, JSON.stringify(arrayData, null, 2));
        })
        .catch(err => {
            throw new Error("Error deleting student: " + err.message);
        });
}