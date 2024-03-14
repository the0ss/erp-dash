import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
import SideBar from "./components/Header/SideBar";
import { useState, createContext, Provider } from "react";

export const productContext=createContext();
export const orderContext=createContext();

export default function Layout() {
  const [products, setProduct] = useState([
    {
      name: "Iphone 14 Pro Max",
      price: "599",
      quantity: 0,
      category: "Electonics",
    },
    {
      name: "Samsung S24+",
      price: "599",
      quantity: 20,
      category: "Electronics",
    },
    {
      name: "Yonex Mavis 350",
      price: "599",
      quantity: 0,
      category: "Sports",
    },
    {
      name: "MacBook Pro",
      price: "599",
      quantity: 20,
      category: "Electronics",
    },
    {
      name: "Chair",
      price: "599",
      quantity: 20,
      category: "Furniture",
    },
  ]);
  const [orders,setOrders]=useState([
    {
      id:"1",
      cname:"Yuvraj",
      date:"2024-03-05",
      status:"Accepted",
    },
    {
      id:"2",
      cname:"Satya",
      date:"2024-06-06",
      status:"Cancelled",
    },
    {
      id:"3",
      cname:"Anu",
      date:"2024-08-23",
      status:"Out For Delivery",
    },
    {
      id:"4",
      cname:"Swarn",
      date:"2024-02-22",
      status:"Delivered",
    }
  ]);
  return (
    <>
      <div className="flex flex-col">
        <SideBar />
        {/* <Outlet context={[products,setProduct]} /> */}
        <productContext.Provider value={[products, setProduct]}>
          <orderContext.Provider value={[orders, setOrders]}>
              <Outlet/>
          </orderContext.Provider>
        </productContext.Provider>
      </div>
    </>
  );
}
