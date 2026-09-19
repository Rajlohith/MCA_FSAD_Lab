# MCA FSAD Lab

This repository contains the programs developed for the **Full Stack Application Development (FSAD) Lab (MCA261I)** as part of the MCA III Semester curriculum.

The programs cover Node.js, Express.js, React, REST APIs, MongoDB queries, MongoDB aggregation, form validation, React–Node connectivity, and React routing.

## Programs

### Program 01 — Online Book Cart CRUD

Demonstrate a Node.js application using **Express.js** to perform CRUD-related operations for an online Book Cart.

The program implements:

- Retrieve all books using `GET /books`
- Retrieve a book by ID using `GET /books/:id`
- Add a new book using `POST /books`
- Demonstrate `PATCH /books`
- Demonstrate `PUT /books`
- Delete a book using `DELETE /books/:id`
- JSON request-body handling using `express.json()`
- HTTP status codes and JSON responses

The book data contains:

- `id`
- `title`
- `author`
- `price`
- `quantity`

### Program 02 — Express GET and POST Form

Write a Node.js program using **Express.js** to accept the following information from a web page:

- Name
- Branch
- Semester

The program demonstrates:

- Handling both GET and POST methods
- GET data through `req.query`
- POST data through `req.body`
- Serving the HTML page using Express static middleware
- Parsing URL-encoded form data using `express.urlencoded()`
- Displaying the **Name in bold**
- Displaying the **Branch underlined**
- Displaying the Semester normally

### Program 03 — Resume Using React Components

Design a resume of a job aspirant using **React components**, including class-based components, and style the resume using CSS.

The example demonstrates components for:

- Resume header
- Personal information
- Educational details
- Education table and rows
- Rendering component data using props

The PDF example uses components such as `Resume_Header`, `Resume_Person_Info`, `Education`, `EdTable`, and `EdRow`.

### Program 04 — Student Registration Portal

Build a student registration portal demonstrating React:

- Components
- State
- Props
- Forms
- Event handling
- Dynamic table rendering
- `componentDidMount()`

The example maintains student information such as:

- Sl. No.
- Student Name
- USN
- Total Marks

A form is provided to add students dynamically to the displayed student list.

### Program 05 — React Form and Validation

Design and implement a React form that collects:

- Name
- Email
- Password

The program demonstrates:

- Controlled form inputs
- React state
- Form submission
- Input change handling
- Validation
- Regular expression-based email validation
- Validation error messages
- Form reset after successful submission

The example validates that:

- Name is provided and has at least 3 characters
- Email is provided and follows the required email pattern
- Password is provided and has at least 8 characters

### Program 06 — React and Node Inventory Management

Deploy connectivity between a **React application and Node.js/Express application** for an Inventory Management System.

The Node.js backend demonstrates:

- Express.js
- CORS
- JSON request handling
- GET `/` for retrieving inventory
- POST `/add` for adding inventory

The React application demonstrates:

- React state using `useState`
- Axios for HTTP communication
- GET requests to retrieve inventory
- POST requests to add inventory
- Displaying inventory in a table
- Inventory fields such as ID, product name, quantity, and price

The laboratory PDF uses port `8000` for the Node/Express inventory backend.

### Program 07 — MongoDB Comparison and Logical Selectors

Develop MongoDB queries using **comparison selectors** and **logical selectors** for an employee/company database.

The example creates an `employees` collection containing fields such as:

- `employee_id`
- `name`
- `department`
- `salary`
- `hire_date`
- `performance_score`
- `status`

The program demonstrates comparison selectors including:

- `$gt`
- `$lte`
- `$in`
- `$ne`

It also demonstrates logical conditions including:

- Implicit `$and`
- `$or`

A complex query combines multiple conditions such as employee status, department, and hire date.

### Program 08 — MongoDB Aggregation and Text Search

Execute an **aggregation pipeline** to illustrate text search on a catalog data collection.

The program demonstrates:

1. Creating catalog documents
2. Creating a text index on:
   - `name`
   - `description`
   - `tags`
3. Searching using `$text` and `$search`
4. Using `$match` in an aggregation pipeline
5. Using `$project` to select required fields
6. Using `$meta: "textScore"` to display search relevance

The example searches for:

```text
durable backpack
```

and returns fields such as product name, price, and text relevance score.

### Program 09 — Employee Management System

Design an **Employee Management System using RESTful APIs in React**.

This program is part of the laboratory program list. The supplied laboratory PDF does not contain the Program 09 implementation, so the README does not assume specific source files, API endpoints, packages, or database operations for this program.

The stated objective is:

- React-based employee management
- RESTful API communication
- Employee data management

### Program 10 — React Router Application

Create a React application using **`react-router-dom`** with multiple pages:

- Home
- About
- Contact

The example demonstrates:

- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- Separate page components
- Navigation between multiple routes

The routes demonstrated are:

```text
/          → Home
/about     → About
/contact   → Contact
```

## Program Ports

The repository follows an incrementing port convention for the programs, starting with **3000 for Program 01**.

| Program | Port |
|---|---:|
| Program 01 | 3000 |
| Program 02 | 3001 |
| Program 03 | 3002 |
| Program 04 | 3003 |
| Program 05 | 3004 |
| Program 06 | 3005 |
| Program 07 | 3006 |
| Program 08 | 3007 |
| Program 09 | 3008 |
| Program 10 | 3009 |

For example:

```text
Program 01 → http://localhost:3000
Program 02 → http://localhost:3001
...
Program 10 → http://localhost:3009
```

**Important:** The port table above describes the repository's intended port assignment. Some source examples in the laboratory PDF currently contain their own port values—for example, Program 01 uses `3000`, Program 02 uses `3000`, and the Program 06 Node/Express example uses `8000`. If the source code has not been changed to match the repository convention, use the port printed by that program when running it.

## Requirements

Install the following software and packages before running the programs in this repository.

### Software Requirements

- **Node.js** — required for the Node.js, Express.js, and React programs.
- **npm** — installed with Node.js and used to install JavaScript dependencies.
- **MongoDB** — required for Programs 07 and 08.
- **mongosh** — MongoDB Shell used to execute the MongoDB commands.
- **Git** — required for cloning and managing the repository.

### Node.js Packages

Install the packages required by the laboratory programs:

```bash
npm install express
npm install cors
npm install axios
npm install react
npm install react-dom
npm install react-router-dom
```

These packages cover the technologies used across the programs:

- `express` — Node.js web server and REST/API development
- `cors` — cross-origin communication between the React frontend and Node.js backend
- `axios` — HTTP communication between React and Node.js
- `react` — React application development
- `react-dom` — rendering React applications in the browser
- `react-router-dom` — client-side routing for Program 10

If the repository has a `package.json` containing these dependencies, install all of them at once with:

```bash
npm install
```

### MongoDB Setup

Install MongoDB and make sure the MongoDB server is available before running Programs 07 and 08.

Verify the MongoDB Shell installation:

```bash
mongosh
```

Programs 07 and 08 use MongoDB shell commands directly. Program 07 works with an `employees` collection, while Program 08 works with a `catalog` collection, creates a text index, and executes an aggregation pipeline.

## Installation

Install the project dependencies:

```bash
npm install
```

If individual program folders contain their own `package.json`, enter that program folder and run:

```bash
npm install
```

For a React program, the required React dependencies should be installed in the corresponding React project.

For MongoDB programs, make sure MongoDB and `mongosh` are installed and available from the terminal.

## Running the Programs

Each program is stored in its own directory:

```text
Program_01
Program_02
Program_03
...
Program_10
```

Navigate to the program you want to execute:

```bash
cd Program_01
```

Install dependencies if required:

```bash
npm install
```

Then run the program using the command specified by its implementation. For Node.js/Express programs, this is generally:

```bash
node server.js
```

or, when the program uses another server file:

```bash
node <filename>.js
```

For React programs, use the command defined in the program's `package.json`, commonly:

```bash
npm start
```

or:

```bash
npm run dev
```

For MongoDB programs, open the MongoDB shell:

```bash
mongosh
```

and execute the commands provided for that program.

### Running Program 01

```bash
cd Program_01
node server.js
```

The terminal should display the server address. Under the repository's port convention:

```text
Server running on http://localhost:3000
```

Open the application/API at:

```text
http://localhost:3000
```

### Running Program 02

Stop the previous server with `Ctrl + C`, then:

```bash
cd ../Program_02
node server.js
```

Under the repository's port convention, Program 02 uses:

```text
http://localhost:3001
```

### Running the Remaining Programs

The same general process applies to Program 03 through Program 10:

1. Stop the currently running program using `Ctrl + C`.
2. Navigate to the required program directory.
3. Run `npm install` if dependencies have not already been installed.
4. Start the program using its appropriate command.
5. Open the assigned localhost port when the program starts a server.
6. For MongoDB programs, run the MongoDB commands through `mongosh`.

## Program-Specific Execution Summary

| Program | Technology | Main Purpose |
|---|---|---|
| 01 | Node.js + Express | Book Cart CRUD/API operations |
| 02 | Node.js + Express | GET/POST form handling |
| 03 | React + CSS | Resume using React components |
| 04 | React | Student registration using components, state and props |
| 05 | React | Form handling and validation |
| 06 | React + Node.js + Express + Axios | Inventory management connectivity |
| 07 | MongoDB | Comparison and logical selectors |
| 08 | MongoDB | Aggregation pipeline and text search |
| 09 | React + RESTful APIs | Employee management system |
| 10 | React + react-router-dom | Multi-page routing |

## API Endpoints

### Program 01

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a book by ID |
| POST | `/books` | Add a new book |
| PATCH | `/books` | Demonstrate PATCH |
| PUT | `/books` | Demonstrate PUT |
| DELETE | `/books/:id` | Delete a book |

### Program 02

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/submit-get` | Receive form data using `req.query` |
| POST | `/submit-post` | Receive form data using `req.body` |

### Program 06

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Retrieve inventory |
| POST | `/add` | Add inventory |


## Notes

- Run `npm install` before running the programs when dependencies have not already been installed.
- Install Express, CORS, Axios, React, React DOM, and `react-router-dom` as required by the laboratory programs.
- MongoDB programs require MongoDB and `mongosh`.
- Check the program-specific port before starting a server.
- Only one process can normally listen on a particular port at a time.
- Stop a running server with `Ctrl + C` before starting another program.
- Program 06 requires communication between the React frontend and Node/Express backend and uses CORS.
- Do not commit the `node_modules` folder to Git.
- Do not commit `.env` files or API keys/secrets to Git.
