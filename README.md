# SchoolManagerCRUD

A simple command-line CRUD (Create, Read, Update, Delete) application for managing student records using Node.js. Student data is stored in a JSON file (`DB.txt`). The application allows you to add, view, update, and delete student records interactively.

## Features

- **Create**: Add a new student with Name, Age, and Grade.
- **Read**: List all students in the database.
- **Update**: Modify specific fields of a student by Id.
- **Delete**: Remove a student by Id.
- **Persistent Storage**: All data is saved in a JSON file for persistence.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)

### Installation

1. Clone or download this repository.
2. Ensure the `DB` directory exists with a `DB.txt` file (an empty array `[]` if starting fresh).

### Usage

Run the application from the project root:

```bash
node app.js
```

Follow the on-screen menu to perform CRUD operations.

## Project Structure

```
SchoolManagerCRUD/
│
├── app.js                  # Main application entry point
├── DB/
│   └── DB.txt              # JSON file storing student records
├── modules/
│   ├── create.js           # Add new student
│   ├── read.js             # List all students
│   ├── update.js           # Update student fields
│   ├── delete.js           # Delete student by Id
│   └── fileHelpers.js      # Promise-based file 
                                read/write helpers
└── README.md               # Project documentation
```

## Module Overview

- **app.js**: Handles user interaction and menu navigation.
- **modules/create.js**: Adds a new student (callback-based).
- **modules/read.js**: Reads all students (callback-based).
- **modules/update.js**: Updates student fields by Id (Promise-based).
- **modules/delete.js**: Deletes a student by Id (Promise-based).
- **modules/fileHelpers.js**: Provides Promise-based wrappers for file operations.

## Example

```
Choose an operation:
1. create - Add a new student
2. read - Show all students
3. update - Update specific fields of a student
4. delete - Remove a student
5. exit
Enter your choice: 1
Enter student as JSON (e.g. {"Name":"Ali","Age":20,"Grade":"100"}): {"Name":"Ali","Age":20,"Grade":"100"}
Student created: { Name: 'Ali', Age: 20, Grade: '100', Id: '1' }
```

## Notes

- Student Ids are assigned automatically and are unique.
- The database file (`DB.txt`) must be valid JSON (an array of student objects).
- For update and delete, provide the correct student Id.