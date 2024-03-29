import React from "react";

// this is the view for showing one product's profile
function ShowProduct(props) {
  let p = props.product;
  return (
    <div className="ShowProduct">
      {p && (
        <>
          <img src={p.productImage} width="500" height="500" alt="" />
          <h2>{p.productName}</h2> {p.quantity} {p.quantityUnits}
          <p>
            This product is being described here, and there are so many awesome
            things about it. Yay!
          </p>
          <h3>This product has been found at:</h3> <br />
          <ul className="FoundAtStores">
            {p.stores.map((p) => (
              <li
                key={p.id}
                style={{ listStyleType: "none" }}
                onClick={(e) => props.redirectToStoreCb(p.id)}
              >
                <img src={p.storeImage} width="200" height="200" alt="" />{" "}
                <br />
                <h4>{p.storeName}</h4>
                <br /> {p.storeCity}
                {","} {p.storeCountry} {""}
                {p.storePostalCode} <br />
                priced at {p.productPrice}€
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ShowProduct;
