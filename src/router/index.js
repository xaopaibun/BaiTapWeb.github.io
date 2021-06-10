import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SanPham from "../Components/Admin/Coffee/SanPham";
import LoaiCoffee from "../Components/Admin/LoaiCoffee";
import Menu from "../Components/Admin/Home/Menu";
import DonHang from "../Components/Admin/DonHang";
import NCC from "../Components/Admin/NCC";
import TrangChu from "../Components/WebCoffeeHouse/TrangChu.js";
import Coffee from "../Components/WebCoffeeHouse/ChiTietCoffee";
import DangNhap from "../Components/WebCoffeeHouse/DangNhap";
import DangKy from "../Components/WebCoffeeHouse/DangKy";
import AllSanPham from "../Components/WebCoffeeHouse/SanPham";
import Cart from "../Components/WebCoffeeHouse/GioHang";
import Account from "../Components/WebCoffeeHouse/Account";
import MenuBar from "../Components/Admin/MenuBar";
import QuanTri from "../Components/Admin";
import FormDienThongTin from "../Components/WebCoffeeHouse/FormDienThongTin";
import OrderDetail from "../Components/Admin/DonHang/OrderDetail";
import MenuQuanLyKhac from "../Components/Admin/QuanLyKhac";
import Login from "../Components/Admin/Login";
import AddProduct from "../Components/Admin/Coffee/AddProduct";
import AddNews from "../Components/Admin/News/AddNews";


export default function RouterApp() {
  return (
    <Router>
        <Switch>
        <Route path="/Admin/Login">
            <Login />
          </Route>
           <Route path="/Admin/NCC">
            <NCC />
          </Route>
          <Route path="/Admin/DonHang/OrderDetail">
            <OrderDetail />
          </Route>
           <Route path="/Admin/DonHang">
            <DonHang />
          </Route>
          <Route path="/Admin/News/AddNews">
            <AddNews />
          </Route>
          <Route path="/Admin/MenuQuanLyKhac">
            <MenuQuanLyKhac />
          </Route>
          <Route path="/Admin/LoaiCoffee">
            <LoaiCoffee/>
          </Route>
          <Route path="/Admin/SanPham/AddProduct">
            <AddProduct />
          </Route>
          <Route path="/Admin/SanPham">
            <SanPham />
          </Route>
          <Route path="/Admin">
            <QuanTri />
          </Route>
          <Route path="/_idCoffee=:id">
            <Coffee />
          </Route>
          <Route path="/DangKy">
            <DangKy />
          </Route>
          <Route path="/AllSanPham">
            <AllSanPham />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Account">
            <Account/>
          </Route>
          <Route path="/DangNhap">
            <DangNhap />
          </Route>
          <Route path="/FormDienThongTin">
            <FormDienThongTin />
          </Route>
          <Route path="/TrangChu">
            <TrangChu />
          </Route>
          <Route path="/">
            <TrangChu />
          </Route>
          
         
        </Switch>
      
    </Router>
  );
}