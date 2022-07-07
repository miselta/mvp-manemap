var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET stores listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a store");
// });

// GET store list
router.get("/", async function (req, res, next) {
  try {
    const results = await db("SELECT * FROM stores;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET one store
router.get("/:id", async function (req, res, next) {
  let { id } = req.params;

  try {
    const results = await db(`SELECT * FROM stores WHERE id = ${id};`);
    // res.status(201).send(results.data);
    let stores = results.data;
    if (stores.length === 0) {
      res.status(404).send({ error: "This store does not exist" });
    } else {
      res.send(stores[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// INSERT a new store into the DB
router.post("/", async function (req, res) {
  //your code here
  let { storeName, storeAddress, storeCity, storeCountry, storePostalCode } =
    req.body;
  try {
    await db(`INSERT INTO stores (storeName, storeAddress, storeCity, storeCountry, storePostalCode) VALUES
  ('${storeName}', '${storeAddress}', '${storeCity}', '${storeCountry}', '${storePostalCode}');`);
    // then return the list of stores
    const results = await db(`SELECT * FROM stores`);
    // message number 201 means 'new resource created'
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
module.exports = router;
