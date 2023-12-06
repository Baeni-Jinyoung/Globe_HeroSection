import React from "react";
import './Product.css';

const Product = () => {
  const products = [
    {
      name: "Atlas"
    },
    {
      name: "Billing"
    },
    {
      name: "Capital"
    },
    {
      name: "Checkout"
    },
    {
      name: "Climate"
    }
  ];
  return (
    <div>
      {products.map((el, i) => (
        <div key={i + 1} className="product">{el.name}
        </div>
      ))}
    </div>
  );
};

export default Product;
