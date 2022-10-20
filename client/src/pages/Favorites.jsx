import React, { useState } from "react";
import "../public/styles/favorites.css";
import { Card, Row, Col } from "reactstrap";
import { Navbar, NavbarBrand, Modal } from "reactstrap";
import dummyItems from "../items";

export default function Favorites() {
  const [items, setItems] = useState(dummyItems.filter(item=>item.saved));
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function createCard(item) {
    return (
      <Col className="fav-row">
        <Card className="fav-card" onClick={toggle}>
          <img className="item-img" src={item.url} />
          <p>${item.price}</p>
          <p>{item.name}</p>
        </Card>
        <Modal isOpen={modal} toggle={toggle}>
          <Card body className="item-card">
            <Row>
              <Col>
                <img className="item-img" src={item.url} />
              </Col>
              <Col>
                <p>${item.price}</p>
                <p>{item.name}</p>
                <p>Condition: {item.condition}</p>
                <p>Ph: {item.ph}</p>
                <p>Address: {item.address}</p>
              </Col>
            </Row>
          </Card>
        </Modal>
      </Col>
    );
  }

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ESP Marketplace</NavbarBrand>
      </Navbar>
      <h2 style={{ textAlign: "center", margin: "20px" }}>Your favorites!</h2>
      <Row xs="4">{items.map(createCard)}</Row>
    </>
  );
}
