import React, { useState } from "react";

const EMPTY_FORM = {
  productName: "",
  price: 0,
  quantity: 0,
  quantityUnits: "",
  productImage: "",
  // stores: {
  //   id: 0,
  // },
};

function NewProductForm(props) {
  const [form, setForm] = useState(EMPTY_FORM);

  function handleSubmit(event) {
    event.preventDefault();
    props.addProductsCb(form);
    setForm(EMPTY_FORM);
  }

  function handleChange(event) {
    let { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  return (
    <div>
      {" "}
      <h2>Add a new product to the directory! </h2>
      <form onSubmit={handleSubmit} className="NewProductForm">
        <label>
          Product Name
          <input
            name="productName"
            type="text"
            value={form.productName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price
          <input
            name="price"
            type="number"
            min="0"
            value={form.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity
          <input
            name="quantity"
            type="number"
            min="0"
            value={form.quantity}
            onChange={handleChange}
            required
          />
          <input
            name="quantityUnits"
            type="text"
            placeholder="e.g: ml, g, packs, etc."
            value={form.quantityUnits}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL
          <input
            name="productImage"
            type="text"
            value={form.productImage}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default NewProductForm;
