/**
 * SchoolManagerCRUD - Main Application
 * ------------------------------------
 * This is a command-line CRUD (Create, Read, Update, Delete) application for managing student records.
 * Data is stored in a JSON file (DB.txt). The user can add, view, update, and delete students.
 *
 * Usage:
 *   - Run the app with Node.js: `node app.js`
 *   - Follow the menu prompts to perform operations.
 *
 * Modules:
 *   - create: Add a new student
 *   - read: List all students
 *   - update: Update student fields by Id
 *   - delete: Remove a student by Id
 */
import readline from "node:readline";
import { create } from "./modules/create.js";
import { update } from "./modules/update.js";
import { delete_s } from "./modules/delete.js";
import { read } from "./modules/read.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\nChoose an operation:");
    console.log("1. create - Add a new student");
    console.log("2. read - Show all students");
    console.log("3. update - Update specific fields of a student");
    console.log("4. delete - Remove a student");
    console.log("5. exit");
    rl.question("Enter your choice: ", handleMenu);
}

function handleMenu(choice) {
    switch (choice.trim()) {
        case "1":
        case "create":
            rl.question('Enter student as JSON (e.g. {"Name":"Ali","Age":20,"Grade":"100"}): ', input => {
                let student;
                try {
                    student = JSON.parse(input);
                } catch (e) {
                    console.error("Invalid JSON format.");
                    showMenu();
                    return;
                }
                create(student, (err, created) => {
                    if (err) {
                        console.error("Error creating student:", err.message);
                    } else {
                        console.log("Student created:", created);
                    }
                    showMenu();
                });
            });
            break;
        case "2":
        case "read":
            read((err, students) => {
                if (err) {
                    console.error("Error reading students:", err.message);
                } else {
                    console.log("Students:", students);
                }
                showMenu();
            });
            break;
        case "3":
        case "update":
            rl.question("Enter student Id to update: ", id => {
                rl.question('Enter fields to update as JSON (e.g. {"Name":"Sara"}): ', input => {
                    let newData;
                    try {
                        newData = JSON.parse(input);
                    } catch (e) {
                        console.error("Invalid JSON format.");
                        showMenu();
                        return;
                    }
                    update(id, newData)
                        .then(student => {
                            console.log("Updated student:", student);
                            showMenu();
                        })
                        .catch(err => {
                            console.error(err.message);
                            showMenu();
                        });
                });
            });
            break;
        case "4":
        case "delete":
            rl.question("Enter student Id to delete: ", id => {
                delete_s(id)
                    .then(() => {
                        console.log("Student deleted.");
                        showMenu();
                    })
                    .catch(err => {
                        console.error(err.message);
                        showMenu();
                    });
            });
            break;
        case "5":
        case "exit":
            rl.close();
            break;
        default:
            console.log("Invalid option.");
            showMenu();
    }
}

showMenu();