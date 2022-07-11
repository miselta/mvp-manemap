import React, { useState } from "react";

const EMPTY_FORM = {
  storeName: "",
  storeAddress: "",
  storeCity: "",
  storeCountry: "",
  storePostalCode: "",
  blackOwned: 0,
  localOwned: 0,
};

function NewStoreForm(props) {
  const [form, setForm] = useState(EMPTY_FORM);

  function handleSubmit(event) {
    event.preventDefault();
    props.addStoresCb(form);
    setForm(EMPTY_FORM);
  }

  function handleChange(event) {
    let { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  return (
    <div>
      {" "}
      <h2>Add a new store to the directory! </h2>
      <form onSubmit={handleSubmit} className="NewProductForm">
        <label>
          Store Name
          <input
            name="storeName"
            type="text"
            value={form.storeName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address
          <input
            name="storeAddress"
            type="text"
            placeholder="Street Address"
            value={form.storeAddress}
            onChange={handleChange}
            required
          />
          <input
            name="storeCity"
            type="text"
            placeholder="City"
            value={form.storeCity}
            onChange={handleChange}
            required
          />
          <input
            name="storeCountry"
            type="text"
            placeholder="Country"
            value={form.storeCountry}
            onChange={handleChange}
            required
          />
          <input
            name="storePostalCode"
            type="text"
            placeholder="Postal Code"
            value={form.storePostalCode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Store Image
          <input
            name="storeImage"
            type="text"
            value={form.storeImage}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" class="btn btn-light">
          Add Store
        </button>
      </form>
    </div>
  );
}

export default NewStoreForm;
