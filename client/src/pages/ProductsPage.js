import React from "react";

function ProductsPage(props) {
  if (!props.products) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="ProductsPage">
      <h2>Products</h2>{" "}
      <form>
        {" "}
        Looking for something specific? <br />
        <input
          value={props.productName}
          placeholder="product name/keyword"
        ></input>{" "}
        <input placeholder="store name (optional)"></input>{" "}
        <input placeholder="city (optional)"></input>{" "}
        <input placeholder="country (optional)"></input> <button>Search</button>
      </form>
      <ul className="ProductsList">
        {props.products.map((p) => (
          <li key={p.ID} onClick={(e) => props.showProductCb(p.ID)}>
            <img src={p.productImage} width="200" height="200" alt="" /> <br />
            {p.productName} {p.price}€ {p.quantity} {p.quantityUnits}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
