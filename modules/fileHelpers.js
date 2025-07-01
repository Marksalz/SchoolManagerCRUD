/**
 * fileHelpers.js
 * --------------
 * Provides Promise-based wrappers for reading and writing files.
 * Used by other modules for async file operations.
 * 
 * Exports:
 *   - readFilePromise(filePath): Promise<string>
 *   - writeFilePromise(filePath, data): Promise<void>
 */
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