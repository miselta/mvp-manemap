// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import StoresPage from "./pages/StoresPage";
import ShowProduct from "./pages/ShowProduct";
import ShowStore from "./pages/ShowStore";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [productProfile, setProductProfile] = useState({});
  const [storeProfile, setStoreProfile] = useState({});

  useEffect(() => {
    getProducts();
    getStores();
  }, []);

  // get products function
  async function getProducts() {
    let options = {
      method: "GET",
    };
    try {
      let response = await fetch("/products", options);
      if (response.ok) {
        let data = await response.json();
        setProducts(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  // get products by id function
  async function showProduct(id) {
    try {
      let response = await fetch(`/products/${id}`);
      if (response.ok) {
        let data = await response.json();
        setProductProfile(data);
        navigate(`/products/${id}`);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  // get stores function
  async function getStores() {
    let options = {
      method: "GET",
    };
    try {
      let response = await fetch("/stores", options);
      if (response.ok) {
        let data = await response.json();
        setStores(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  // get store by id function
  async function showStore(id) {
    try {
      let response = await fetch(`/stores/${id}`);
      if (response.ok) {
        let data = await response.json();
        setStoreProfile(data);
        navigate(`/stores/${id}`);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="products"
          element={
            <ProductsPage products={products} showProductCb={showProduct} />
          }
        />
        <Route
          path="products/:id"
          element={<ShowProduct product={productProfile} />}
        />
        <Route
          path="stores"
          element={<StoresPage stores={stores} showStoreCb={showStore} />}
        />
        <Route path="stores/:id" element={<ShowStore store={storeProfile} />} />
      </Routes>

      {/* <HomePage />
      <ProductsPage />
      <StoresPage /> */}
      <header className="App-header"></header>
    </div>
  );
}

export default App;
