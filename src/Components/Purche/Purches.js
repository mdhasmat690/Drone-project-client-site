import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../Hooks/UseAuth";
import "./Purche.css";

const Purches = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { register, handleSubmit, reset } = useForm();
   const { user } = useAuth();
  // const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://hidden-fjord-28330.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  
  useEffect(() => {
    reset();
  }, [product]);

  const onSubmit = (data) => {
    fetch("https://hidden-fjord-28330.herokuapp.com/purchases", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, status: "Pending" }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("order processed successfully");
          reset();
        }
      }); 
      console.log(data);
  };



  console.log(product);
  return (
    <div className="container">
      <br />
      <br />
      <div class="row g-5">
        <div class="col-12 col-sm-6">
          <img className="w-100" src={product.img} alt="" />
        </div>
        <div class="col-12 col-sm-6 mx-auto">
          <span className="product-name">{product.name}</span>
          <br />
          <br />
          <ul>
            <li className="my-2">{product.desc1}</li>
            <li className="my-2">{product.desc2}</li>
            <li className="my-2">{product.desc3}</li>
            <li>{product.desc4}</li>
          </ul>

          <h2>Price: {product.price} $</h2>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-around">
        <h1>Purchases form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-75 h-4 mt-3"
            defaultValue={user?.displayName}
            {...register("name")}
          />
          <input
            className="w-75 h-4 mt-3"
            defaultValue={user?.email}
            {...register("email")}
          />
          <input
            className="w-75 h-4 mt-3"
            defaultValue={product?.name}
            {...register("productName", { required: true })}
          />
          <input
            className="w-75 h-4 mt-3"
            defaultValue={product?.price}
            placeholder="price"
            {...register("price", { required: true })}
          />

          <input
            className="w-75 h-4 mt-3"
            defaultValue=""
            placeholder="phone number"
            {...register("phone", { required: true })}
            required
          />
          <input
            className="w-75 h-4 mt-3"
            defaultValue=""
            placeholder="location"
            {...register("location", { required: true })}
            required
          />
          <br />
          <br />
          <Button type="submit" variant="primary">Primary</Button>
        </form>
      </div>
    </div>
  );
};

export default Purches;
