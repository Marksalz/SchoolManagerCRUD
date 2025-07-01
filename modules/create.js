/**
 * create.js
 * ---------
 * Provides the `create` function to add a new student record to the database.
 * Reads the current DB, assigns a new unique Id, and writes the updated array back.
 * 
 * Usage:
 *   create(studentObject, callback)
 *     - studentObject: { Name, Age, Grade }
 *     - callback: function(err, createdStudent)
 */
import { readFile, writeFile } from "node:fs";

export function create(student, cb) {
    const filePath = 'C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt';
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            cb(new Error("Error reading file!"));
        } else {
            let dataArray = [];
            try {
                dataArray = JSON.parse(data);
            } catch (e) {
                return cb(new Error("Invalid DB file format!"));
            }
            let maxId = 0;
            if (dataArray.length > 0) {
                maxId = dataArray.reduce((max, s) => {
                    const id = parseInt(s.Id, 10) || 0;
                    return id > max ? id : max;
                }, 0);
            }
            student.Id = String(maxId + 1);
            dataArray.push(student);
            writeFile(filePath, JSON.stringify(dataArray, null, 2), (err) => {
                if (err) {
                    cb(new Error("Error writing to file!"));
                } else {
                    cb(null, student);
                }
            });
        }
    });
}