import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Products/Products.css";

const id = [1];

const AllProduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://hidden-fjord-28330.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(products);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products?.map((product, index) => (
          <div className="col">
            <div className="card border-0 border-bottom">
              <img
                src={product.img}
                className="card-img-top w-50 mx-auto"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title product-name">
                  {product.name.slice(0, 60)} ...
                </h5>
                <p className="card-text">{product.desc1?.slice(0, 100)}</p>
                <p>Price: {product.price} $</p>

                <div className="d-flex justify-content-between align-items-center">
                  <Rating
                    name="size-small"
                    defaultValue={product.ratting}
                    readOnly
                    size="small"
                  />
                  <br />

                  <Link to={`/purches/${product._id}`}>
                    <button type="button" className="btn-style">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
