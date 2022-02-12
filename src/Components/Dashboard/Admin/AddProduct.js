import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://hidden-fjord-28330.herokuapp.com/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("New Product Added successfully");
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div className="my-4" style={{ backgroundColor: "#d4e3e8" }}>
      <div className="mt-5">
        <h2>Added New Product</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2 w-50"
          {...register("name", { required: true })}
          placeholder="name"
          required
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          {...register("desc1")}
          placeholder="description"
          required
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="number"
          {...register("price")}
          placeholder="price"
          required
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          {...register("img")}
          placeholder="img_url"
          required
        />
        <br />
        <Button className="mb-4" variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
