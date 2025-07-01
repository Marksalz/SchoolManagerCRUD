import { readFile, writeFile } from "node:fs";

export function readFilePromise(filePath) {
    return new Promise((res, rej) => {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        });
    });
}

export function writeFilePromise(filePath, data) {
    return new Promise((res, rej) => {
        writeFile(filePath, data, (err) => {
            if (err) {
                rej(err);
            } else {
                res();
            }
        });
    });
}