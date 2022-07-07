import React from "react";

function ShowProduct(props) {
  let p = props.product[0];
  return (
    <div className="ShowProduct">
      {p && (
        <>
          <img src={p.productImage} width="500" height="500" alt="" />
          <h2>{p.productName}</h2> {p.price}€ {p.quantity} {p.quantityUnits}
          <p>Description about this super cool product!</p>
          <h3>This product has been found at:</h3> <br />
          {/* <ul className="ProductsList">
            {props.products[0].map((p) => (
              <li key={s.storesID}>
                <img src={s.storeImage} width="200" height="200" alt="" />{" "}
                <br />
                {s.storeName} <br />
                {s.storeAddress} <br /> {s.storeCity}
                {","} {s.storeCountry} {""}
                {s.storePostalCode} at {p.price}€
              </li>
            ))}
          </ul> */}
        </>
      )}
    </div>
  );
}

export default ShowProduct;
