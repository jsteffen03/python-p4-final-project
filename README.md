# InteriYOUR Design (Flatiron Phase-4 Final Project)

## Table of Contents
- [Features](#features)
- [Project-Structure](#project-structure)
- [Technologies](#technologies)
- [Installation](#installation)
- [License](#license)

## Features
Welcome to InteriYOUR Design. An application that allows you to plan your interiour design projects.
This application allows you to create and account, create projects, and search through our furniture database to allow you plan your projects

## Project-Structure
```
.
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── README.md
├── client
│   ├── index.html
│   ├── vite.config.js
│   ├── README.md
│   ├── package.json
│   ├── public
│   └── src
|       |__App.jsx
|       |__Main.jsx
|       |__Styles.css
|       |__Components
|           |__Furniture.jsx
|           |__Project.jsx
|           |__Login.jsx
|           |__ProjectCard.jsx
|           |__SelectedFurntirue.jsx
|           |__Userpage.jsx
|  
└── server
    ├── app.py
    ├── config.py
    ├── models.py
    └── seed.py
```

Client:
  Holds nessicary componenets to run the front end.
  src:
    Main.jsx: Holds react components to run App.jsx
    App.jsx: Holds the nessacry components to run the front end on application start
    Styles.css: CSS components for application
    Components: Holds all components that are childs of app
      Furniture.jsx: Holds code to display all furniture in database - Child of Project
      Project.jsx: Holds code for Project page and renders Furniture and SelectedFurniture component
      Login.jsx: Holds code for login page
      ProjectCard.jsx: Holds code to display all user projects - Child of Userpage
      SelectedFurniture.jsx: Holds code to display all selected furniture of project - Child of Project
      Userpage.jsx: Holds code for user home page and renders project card

Server:
  app.py: Holds code to run backend server and routes to fetch from front end
  config.py: Holds all services for App.py/Models.py
  models.py: Holds all the tables for the backend
  seed.py: Seeds the database with furniture data

## Technologies

Backend:
  Python
  Flask (including Flask SQLAlchemy and Flask Migrate)
  SQLAlchemy (ORM)
  SqlLite (database)
Frontend:
  React.js
  Vite (as a build tool)
General:
  JavaScript
  HTML/CSS
  Semantic UI React (for UI components)
Version Control:
  Git (with GitHub for repository management)

## Installation

Ensure you have the following installed:

Backend:

Python 3.8+ (with Flask, Flask SQLAlchemy, and Flask Migrate)
SQLAlchemy ORM
SQLite3 database
Frontend:

Node.js (for React.js and Vite)
Vite (as a build tool)

Setup 

Fork and clone this repository:
```
git clone https://github.com/your-username/python-p4-final-project.git
```
cd into the file on your terminal:
```
cd python-p4-final-project
code .
```

Create a .env file with your computer and generate a secert-key for the passwordhash
Assign it to "SECRET_KEY" within your .env file
place .env into your .gitignore

Create a virtual enviroment with pipenv and enter virtual enviroment:
```
pipenv install 
pipenv shell
```

CD into the server folder:
```
cd server
```

Run the following lines to create the database:
```
export FLASK_APP=app.py
export FLASK_RUN_PORT=5555
flask db init
flask db migrate -m 'Create tables'
flask db upgrade
python seed.py
``` 
Start the backend server:
```
python app.py
```

Open a new ternimal and cd into the client folder
```
cd client
```
Run npm install to install the dependicies:
```
npm install
```
Then start the application:
```
npm run dev
```

## License

Open Source Program
