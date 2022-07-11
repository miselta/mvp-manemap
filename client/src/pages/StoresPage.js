import React from "react";
import "./StoresPage.css";

function StoresPage(props) {
  if (!props.stores) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="StoresPage">
      <h2>Stores</h2>
      <ul className="card-group ">
        {props.stores.map((s) => (
          <li
            className="Store"
            key={s.ID}
            style={{ listStyleType: "none" }}
            onClick={(e) => props.showStoreCb(s.ID)}
          >
            <h3>{s.storeName}</h3> <br />
            <img src={s.storeImage} width="500" height="300" alt="" /> <br />
            {s.storeAddress} <br /> {s.storeCity}
            {","} {s.storeCountry} {""}
            {s.storePostalCode}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoresPage;
