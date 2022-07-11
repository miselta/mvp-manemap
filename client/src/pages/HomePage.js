import React, { useState } from "react";
import "./HomePage.css";

function HomePage(props) {
  if (!props.products || !props.stores) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="HomeView">
      <h1>Insert name here!</h1>
      <h2>Your global directory for all things beauty supply!</h2>
      <div className="FeaturedContainer">
        <h2>Featured Products</h2>
        <ul className="card-group" style={{ listStyleType: "none" }}>
          {props.products.slice(2, 5).map((p) => (
            <li
              className="FeaturedProducts"
              key={p.ID}
              onClick={(e) => props.showProductCb(p.ID)}
            >
              <img src={p.productImage} width="200" height="200" alt="" />{" "}
              <br />
              <h4>{p.productName}</h4> <br /> {p.quantity} {p.quantityUnits}
            </li>
          ))}
        </ul>
        <h2>Featured Stores</h2>
        <ul className="card-group" style={{ listStyleType: "none" }}>
          {props.stores.slice(0, 2).map((s) => (
            <li
              className="Store"
              key={s.ID}
              onClick={(e) => props.showStoreCb(s.ID)}
            >
              <h3>{s.storeName}</h3> <br />
              <img src={s.storeImage} width="500" height="300" alt="" /> <br />
              <br /> {s.storeCity}
              {","} {s.storeCountry} {""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default HomePage;
