import { error } from "node:console";
import { readFile, writeFile } from "node:fs";

function create(student) {
    readFile('C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error("Error reading file!");
        } else {
            let dataArray = JSON.parse(data);
            let maxId = 0;
            if (dataArray.length > 0) {
                maxId = Math.max(...dataArray.map(s => parseInt(s.Id, 10) || 0));
            }
            student.Id = String(maxId + 1);
            dataArray.push(student);
            writeFile('C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt', JSON.stringify(dataArray, null, 2), (err) => {
                if (err) {
                    throw new Error("Error writing to file!");
                }
            });
        }
    });
}

create({ "Name": "Menavc", "Age": "24", "Grade": "12" });