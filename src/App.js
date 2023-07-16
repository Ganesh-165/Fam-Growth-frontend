import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Provider from "./components/Provider";
import Form from "./components/Form";
import YourProducts from "./Cards/YourProducts";
import YourServices from "./Cards/YourServices";
import AddProduct from "./Cards/AddProduct";
import AddService from "./Cards/AddService";
import ProductDetails from "./Cards/ProductDetails";
import ServiceDetails from "./Cards/ServiceDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/username" element={<Home />}>
          <Route path="products" >
            <Route index element={<Products />}></Route>
            <Route path=":id" element={<ProductDetails/>}></Route>
          </Route>
          <Route path="services">
            <Route index element={<Services/>}></Route>
            <Route  path=":id" element={<ServiceDetails/>}></Route>
          </Route>
          <Route path="provider">
            <Route index element={<Provider/>}></Route>
            <Route path="getstarted" element={<Form />}></Route>
            <Route path="yourproducts">
              <Route index element={<YourProducts />}></Route>
              <Route path=':id' element={<ProductDetails/>}></Route>
              <Route path="addnewproduct" element={<AddProduct/>}></Route>
            </Route>
            <Route path="yourservices">
            <Route index element={<YourServices/>}></Route>
              <Route path=':id' element={<ServiceDetails/>}></Route>
              <Route path="addnewservice" element={<AddService/>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
