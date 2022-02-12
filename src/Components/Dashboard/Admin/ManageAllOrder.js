import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageAllOrder = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://hidden-fjord-28330.herokuapp.com/purchases")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  const shippedOrder = (id) => {
    fetch(`https://hidden-fjord-28330.herokuapp.com/purchases/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedProducts = products.map((product) => {
            if (product._id === id) {
              product.status = "shipped";
            }

            return product;
          });

          setProducts(updatedProducts);
        }
      });
  };
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {products?.map((product, index) => (
          <tbody key={product._id}>
            <tr>
              <td>{index}</td>
              <td>{product.name}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>
                <h4>{product.status}</h4>
              </td>
              <Button
                className="bg-info"
                onClick={() => shippedOrder(product._id)}
              >
                Update
              </Button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllOrder;
