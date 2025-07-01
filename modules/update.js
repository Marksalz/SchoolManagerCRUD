import { readFilePromise, writeFilePromise } from "./fileHelpers.js";

export function update(id, newData) {
    const filePath = 'C:\\JSProjects\\SchoolManagerCRUD\\DB\\DB.txt';
    return readFilePromise(filePath)
        .then(data => {
            let dataArray = JSON.parse(data);
            const index = dataArray.findIndex(student => student.Id === id);
            if (index === -1) {
                throw new Error("Id not found!");
            }
            const student = dataArray[index];
            for (let key in newData) {
                if (key !== "Id" ) {
                    student[key] = newData[key];
                }
            }
            dataArray[index] = student;
            return writeFilePromise(filePath, JSON.stringify(dataArray, null, 2)).then(() => student);
        })
        .catch(err => {
            throw new Error("Error updating student: " + err.message);
        });
}

// Example usage:
update("1", { Name: "Updated Name" })
    .then(student => console.log("Updated student:", student))
    .catch(err => console.error(err));

