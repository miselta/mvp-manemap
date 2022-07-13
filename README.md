HELLO! Welcome to Miselta's MVP project :)

# ABOUT

This project is called ManeMap, a directory of beauty supply products & stores. Geared mainly towards the black community and individuals with curly & afro-hair types, its main purpose is to streamline the process of locating specialized beauty supply stores & products.

# KEY TECHNOLOGIES

(In the order that I used them)

- Figma (optional): To visualize the the styling of the page in a digital environment.
- DBDesigner (optional): To visualize the database tables.
- VS Code: To code.
- mySQL: To store information in the database.
- Node.js and Express: To get the BackEnd working.
- Postman: To test the BackEnd Routes (currently have GET, GET by Id, and POST).
- React & React Router: To get the FrontEnd working.
- Bootstrap (optional): For styling - I used a combination of this with Vanilla CSS.

# DATABASE & STRUCTURE INSTALATION

The database consists of three tables - products, stores, and the junction table called products_stores.
You can view that here:
![Database-Tables](mvp-hair-app/database-tables.png)

There is an `INIT_DB.SQL` file with the SQL commands in it, as well as the default data at the bottom of it.

To install the database:

- In your terminal, access the MySQL interface by running `mysql -u root -p`
- Create a new database called hair, run the command: `create database hair;`
- In VSCode: create a `.env` file with the following information:
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=hair
  DB_PASS=(your password here)
- Create a `.gitignore` file, then add the line `node_modules/` to it.
- Add the line `.env` to your `.gitignore` file.
- Take a look at the `INIT_DB.SQL` file in the model folder for the current database information, and run `npm run migrate` to update the database with this information. Run this command again every time you make changes to that file - so that they can be updated.
- In your MySQL console, you can run `use hair;` and then `describe hair;` to see the structure of the reviews table.

# BE/FE INSTALATION

- After you clone the git repository, run `npm install` in your terminal.
- Then, run `npm start` to run the model.
- Then, run `cd client` on the project folder to access the client folder, and run `npm start` again to run the client.
- Feliz coding!!

# BUGS:

- SOME pages work on refresh, some don't. So don't be surprised if something breaks as soon as it refreshes.
- Product Search:
  - In the product search, searching for anything with two words simply does not work...Was in the middle of trying to debug this one.
  - 'Beads' and 'Gel' for some reason show up twice when it is searched, even though they both appear in only one store.
- In my junction tables, ID is sometimes 'ID' and other times 'id', so if you need to refer to a specific ID, I recommend taking a look at Postman and seeing what is returned there, and also comparing that with what is in the INIT_DB_SQL file.
- The stores page styling doesn't respond well to having an odd amount of stores.

# FEATURE EXTENSION IDEAS:

- Getting the product search to work with all the input fields, as well as with two words.
- Having a store search, similar to the product search. Also being able to search stores by products they have.
- Being able to make product recommendations based on hair type.
- Product & store reviews.
- More cities and countries.
- Banners to indicate Black-owned & local-owned stores (these fields already exist in the database but I didn't get to using them through a checkbox/banner).
- Including ways to find hair salons and protective hairstylists as well, also by location.

This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.

The images used in the logo are not mine, and were manually combined.
