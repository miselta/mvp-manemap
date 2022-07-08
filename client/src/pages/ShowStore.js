import React from "react";

function ShowStore(props) {
  let s = props.store;
  return (
    <div className="ShowStore">
      {/* only if s exists, do the following */}
      {s && (
        <>
          <h2>{s.storeName}</h2>
          <img src={s.storeImage} width="600" height="500" alt="" />
          <br />
          {s.storeAddress} <br /> {s.storeCity}
          {","} {s.storeCountry} {""}
          {s.storePostalCode}
          <h3>Products found at this store:</h3> <br />
          <ul className="FoundProducts">
            {s.products.map((s) => (
              <li>
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
