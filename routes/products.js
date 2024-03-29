var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// join to JSON helper function
function joinToJson(results) {
  // Get first row
  let row0 = results.data[0];

  // Create array of store objs
  let stores = [];
  if (row0.storesID) {
    stores = results.data.map((s) => ({
      id: s.storesID,
      storeName: s.storeName,
      storeAddress: s.storeAddress,
      storeCity: s.storeCity,
      storeCountry: s.storeCountry,
      storePostalCode: s.storePostalCode,
      storeImage: s.storeImage,
      productPrice: s.productPrice,
    }));
  }

  // Create product obj
  let products = {
    id: row0.productsID,
    productName: row0.productName,
    price: row0.price,
    quantity: row0.quantity,
    quantityUnits: row0.quantityUnits,
    productImage: row0.productImage,
    stores,
  };

  return products;
}

// make WHERE from filters helper function (takes a query parameter)
// used in get route, for searching through products
function makeWhereFromFilters(q) {
  let filters = [];

  if (q.productName) {
    filters.push(`products.productName = '${q.productName.replace("+", " ")}'`);
  }
  if (q.storeName) {
    filters.push(`stores.storeName = '${q.storeName.replace("+", " ")}'`);
  }
  if (q.storeCity) {
    filters.push(`stores.storeCity = '${q.storeCity.replace("+", " ")}'`);
  }
  if (q.storeCountry) {
    filters.push(`stores.storeCountry = '${q.storeCountry.replace("+", " ")}'`);
  }

  // Return all filters joined by AND (for the sake of SQL syntax)
  return filters.join(" AND ");
}

// GET product list
// this slash already refers to products because in app.js it is specified there
// all the info for query parameters, used in search, is included here
router.get("/", async function (req, res) {
  let sql = "SELECT *, products.ID AS productsID FROM products ";
  let where = makeWhereFromFilters(req.query); // make optional WHERE from query parameters
  // can include an optional console.log(where) to see what's being taken as a query parameter
  try {
    if (where) {
      // inner joins to enable searching with store filters
      // on postman, the first ID column refers to store ID, better to just ignore it and
      // read through FK_productsID and FK_storesID to know which is which
      sql += `INNER JOIN products_stores ON products_stores.FK_storesID = products.ID
      INNER JOIN stores ON products_stores.FK_productsID = stores.ID WHERE ${where}`;
    }
    const results = await db(sql);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET one product
// contains the joins to show stores that contain a given product
router.get("/:id", async function (req, res, next) {
  let { id } = req.params;

  try {
    // DO NOT USE THE ID
    let results = await db(`
    SELECT products.ID as productsID, stores.ID as storesID, products.*, stores.*, products_stores.productPrice
    FROM products
    LEFT JOIN products_stores ON products.ID = products_stores.FK_productsID
    LEFT JOIN stores ON stores.ID = products_stores.FK_storesID
    WHERE products.ID = ${id}
    `);

    let products = await results;
    products = joinToJson(products);
    // checking if the response array is empty, meaning the store doesnt exist
    if (products.length === 0) {
      res.status(404).send({ error: "This product does not exist" });
    } else {
      // we need to return the object (in the array) and not the array itself
      res.send(products);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// INSERT a new product into the DB
router.post("/", async function (req, res) {
  let { productName, price, quantity, quantityUnits, productImage } = req.body;

  try {
    await db(`INSERT INTO products (productName, price, quantity, quantityUnits, productImage) VALUES
    ('${productName}', ${price}, ${quantity}, '${quantityUnits}', '${productImage}')`);
    // then return the list of products
    const results = await db(`SELECT * FROM products`);
    // message number 201 means 'new resource created'
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
module.exports = router;
