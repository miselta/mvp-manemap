
# About

This MVP project is called ManeMap, a directory of beauty supply products & stores. Geared mainly towards the black community and individuals with curly & afro-hair types, its main purpose is to streamline the process of locating specialized beauty supply stores & products.

# Database Instalation

The database consists of three tables - products, stores, and the junction table called products_stores.
![Database-Tables](https://user-images.githubusercontent.com/105108470/185428540-6fd48280-7ae2-4a00-9b05-493b3b81aff3.png)

There is an `INIT_DB.SQL` file with the SQL commands in it to create the tables, as well as the default data.

To install the database:

- In your terminal, access the MySQL interface by running `mysql -u root -p`
- Create a new database called hair - run the command: `create database hair;`
- In VSCode: create a `.env` file with the following information:

  bash```DB_HOST=localhost
  DB_USER=root
  DB_NAME=hair
  DB_PASS=(your password here)```bash
  
- Create a `.gitignore` file, then, on two separate lines, add `node_modules/` and `.env` to it.
- Run `npm run migrate` in the project folder to update the database with this information. Run this command again every time you make changes to that file so that they can be updated.
- In your MySQL console, you can run `use hair;` and then `describe hair;` to see the structure of the hair table.

# BE/FE Instalation

- After you clone the git repository, run `npm install` in your terminal.
- Then, run `npm start` to start the backend.
- Then, `cd client` on the project folder to access the client folder, and run `npm start` again to run the client.
- Feliz coding!!

# Demo


https://user-images.githubusercontent.com/105108470/185431439-f7e6811d-f784-4dfb-ac1b-00932933c313.mp4



<!--- not sure if these have a place in the a public readme

# Bugs:

- SOME pages work on refresh, some don't. So don't be surprised if something breaks as soon as it refreshes.
- Product Search:
  - In the product search, searching for anything with two words simply does not work...Was in the middle of trying to debug this one.
  - 'Beads' and 'Gel' for some reason show up twice when it is searched, even though they both appear in only one store.
- In my junction tables, ID is sometimes 'ID' and other times 'id', so if you need to refer to a specific ID, I recommend taking a look at Postman and seeing what is returned there, and also comparing that with what is in the INIT_DB_SQL file.
- The stores page styling doesn't respond well to having an odd amount of stores.

# Feature Extension Ideas:

- Getting the product search to work with all the input fields, as well as with two words.
- Having a store search, similar to the product search. Also being able to search stores by products they have.
- Being able to make product recommendations based on hair type.
- Product & store reviews.
- More cities and countries.
- Banners to indicate Black-owned & local-owned stores (these fields already exist in the database but I didn't get to using them through a checkbox/banner).
- Including ways to find hair salons and protective hairstylists as well, also by location.

--->

# Technologies

(In the rough order of use)

- Figma (optional): To visualize the the styling of the page in a digital environment.
- DBDesigner (optional): To visualize the database tables.
- VS Code: To code.
- mySQL: To store information in the database.
- Node.js and Express: To get the BackEnd working.
- Postman API: To test the BackEnd Routes (currently have GET, GET by id, and POST).
- React.js & React Router: To get the FrontEnd working, to use private routes.
- Bootstrap (optional): For styling.
- JavaScript ES6+
- HTML
- CSS


This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.

The images used in the logo are not mine, and were manually combined.
