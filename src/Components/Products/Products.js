import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ product }) => {
  const { name,_id, img, desc1, desc2, desc3, desc4, price, ratting } = product;
  return (
    <>
      <div className="col">
        <div className="card border-0 border-bottom">
          <img src={img} className="card-img-top w-50 mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title product-name">{name.slice(0, 60)} ...</h5>
            <p className="card-text">{desc1?.slice(0, 100)}</p>
            <p>Price: {price} $</p>

            <div className="d-flex justify-content-between align-items-center">
              <Rating
                name="size-small"
                defaultValue={ratting}
                readOnly
                size="small"
              />
              <br />
              <Link to={`purches/${_id}`}>
                <button type="button" className="btn-style">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
