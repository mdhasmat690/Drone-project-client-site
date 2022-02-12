// import logo from './logo.svg';
// import './App.css';
import Navigation from "./Components/Home/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Purches from "./Components/Purche/Purches";
import Login from "./Components/Register/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Context/AuthProvider";
import PrivateRoute from "./Components/PrivetRoute/PrivetRout";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashBoardHome from "./Components/Dashboard/DashBoardHome";
import MayOrder from "./Components/Dashboard/NormalUser/MayOrder";
import ManageAllOrder from "./Components/Dashboard/Admin/ManageAllOrder";
import MakeAdmin from "./Components/Dashboard/Admin/MakeAdmin";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import MyOrder from "./Components/Dashboard/NormalUser/MayOrder";
import Review from "./Components/Dashboard/NormalUser/Review";
import AddProduct from "./Components/Dashboard/Admin/AddProduct";
import ManageProduct from "./Components/Dashboard/Admin/ManageProduct";
import AllProduct from "./Components/Product/AllProduct";
import Product from "./Components/Product/Product";
import Error from "./Components/Error/Error";
import Dell from "./Components/Dell/Dell";
import Footer from "./Components/Footer/Footer";
import Post from "./Components/Dell/post";
import Posts from "./Components/Dell/posts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="/dashboard"
                element={<DashBoardHome></DashBoardHome>}
              ></Route>

              <Route
                path="/dashboard/addProduct"
                element={<AddProduct></AddProduct>}
              ></Route>

              <Route
                path="/dashboard/manageAllOrder"
                element={<ManageAllOrder></ManageAllOrder>}
              ></Route>
              <Route
                path="/dashboard/manageProduct"
                element={<ManageProduct></ManageProduct>}
              ></Route>

              <Route
                path="/dashboard/mayOrder"
                element={
                  <PrivateRoute>
                    <MyOrder></MyOrder>
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard/review"
                element={
                  <PrivateRoute>
                    <Review></Review>
                  </PrivateRoute>
                }
              ></Route>

              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              ></Route>
            </Route>

            <Route path="allProduct" element={<AllProduct />}></Route>
            <Route path="posts/" element={<Posts />} />
            <Route path="/posts/:postId" element={<Post />} />

            <Route path="home" element={<Home />} />
            <Route path="product1" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dell/:id" element={<Dell />} />
            <Route
              path="purches/:id"
              element={
                <PrivateRoute>
                  <Purches />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
