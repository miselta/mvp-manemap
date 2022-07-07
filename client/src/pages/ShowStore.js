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
        </>
      )}
    </div>
  );
}

export default ShowStore;
