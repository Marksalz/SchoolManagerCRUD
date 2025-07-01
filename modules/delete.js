/**
 * delete.js
 * ---------
 * Provides the `delete_s` function to remove a student record by Id.
 * Reads the DB, removes the student if found, and writes the updated array back.
 * 
 * Usage:
 *   delete_s(id) -> Promise
 *     - id: string (student Id)
 *     - Resolves on success, rejects if Id not found or on error.
 */
import { readFilePromise, writeFilePromise } from "./fileHelpers.js";

export function delete_s(id) {
    const filePath = 'C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt';
    return readFilePromise(filePath)
        .then((data) => {
            let arrayData = JSON.parse(data);
            const index = arrayData.findIndex(student => student.Id === id);
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