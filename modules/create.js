import { error } from "node:console";
import { readFile, writeFile } from "node:fs";

function create(student) {
    readFile('C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error("Error reading file!")
        } else {
            let dataArray = JSON.parse(data);
            dataArray.push(student);
            writeFile('C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt', JSON.stringify(dataArray, null, 2), (err) => {
                if (err) {
                    throw new Error("Error writing to file!")
                } else {

                }
            })
        }
    })
}

//create({ "Id": "2", "Name": "Adina", "Age": "23", "Grade": "10" });