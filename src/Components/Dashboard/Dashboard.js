import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Dashboard.css";
import useAuth from "../Hooks/UseAuth";
const Dashboard = () => {
  const { admin, logout } = useAuth();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 ">
          <div className="dashboard">
            <h5>Dashboard</h5>
            {admin ? (
              <>
                <Link to={`/dashboard/manageAllOrder`}>
                  <Button color="inherit">manageAllOrder</Button>
                </Link>
                <br />
                <Link to={`/dashboard/addProduct`}>
                  <Button color="inherit">AddProduct</Button>
                </Link>
                <br />
                <Link to={`/dashboard/manageProduct`}>
                  <Button color="inherit">ManageProduct</Button>
                </Link>
                <br />
                <Link to={`/dashboard/makeAdmin`}>
                  <Button color="inherit">MakeAdmin</Button>
                </Link>
                <br />
              </>
            ) : (
              <>
                {" "}
                <Link to={`/dashboard/mayOrder`}>
                  <Button color="inherit">MayOrder</Button>
                </Link>
                <br />
                <Link to={`/dashboard/review`}>
                  <Button color="inherit">Review</Button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="col-md-9">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
