import { readFile, writeFile } from "node:fs";

function read(cb) {
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

// read((err, students) => {
//     if (err) console.error(err);
//     else console.log(students);
// });
