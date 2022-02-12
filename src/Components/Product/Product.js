import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const Product = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://hidden-fjord-28330.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <div className="mx-auto">
        <h2>Our Product</h2>
      </div>
      {products?.length ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products?.map((product, index) => (
            <Products key={index} product={product}></Products>
          ))}
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default Product;
