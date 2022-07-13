import React from "react";
// import { Link } from "react-router-dom";

// this is the view for showing one store's profile
function ShowStore(props) {
  let s = props.store;
  return (
    <div className="ShowStore">
      {/* only if store exists, do the following */}
      {s && (
        <>
          <h2>{s.storeName}</h2>
          <img src={s.storeImage} width="600" height="500" alt="" />
          <br />
          {s.storeAddress} <br /> {s.storeCity}
          {","} {s.storeCountry} {""}
          {s.storePostalCode}
          <h3>Some products found at this store:</h3> <br />
          <ul className="FoundProducts">
            {s.products.map((s) => (
              <li
                key={s.id}
                style={{ listStyleType: "none" }}
                onClick={(e) => props.redirectToProductCb(s.id)}
              >
                <img src={s.productImage} width="200" height="200" alt="" />
                <br />
                {s.productName} <br /> {s.quantity}
                {s.quantityUnits} at {s.productPrice}€
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ShowStore;
