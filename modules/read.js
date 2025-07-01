import { readFile, writeFile } from "node:fs";

export function read(cb) {
    const filePath = 'C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt';
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            let dataArray = JSON.parse(data);
            cb(null, dataArray);
        }
    });
}