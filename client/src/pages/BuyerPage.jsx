import axios from "axios";
import React, { useState } from "react";
import Search from "../components/Search";
import "../public/styles/buyerPage.css";
import { Navbar, NavbarBrand } from "reactstrap";
import dummyItems from "../items";
import ItemCard from "../components/ItemCard";
import { useEffect } from "react";

export default function BuyerPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let data;
    axios
      .get("/item")
      .then((res) => {
        data = res.data;
        setItems(data)
      })
      .catch((err) => {});
  });

  function create(item) {
    return (
      <ItemCard
        key={item.id}
        price={item.price}
        name={item.name}
        condition={item.condition}
        filename={item.filename}
        ph={item.ph}
        address={item.address}
      />
    );
  }
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <span className="brandname">ESP Marketplace</span>
          <span>
            <a href="/favorites">Favorites</a>
          </span>
        </NavbarBrand>
      </Navbar>
      <Search />
      {items.map(create)}
    </>
  );
}
