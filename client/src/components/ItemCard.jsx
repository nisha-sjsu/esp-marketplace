import React, { useState } from "react";
import { Col, Row, Card } from "reactstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemCard(props) {
  const [saved, setSaved] = useState(props.saved);
  function handleSave() {
    setSaved(!saved);
    //add login to change saved flag in db
  }
  return (
    <>
      <Card body className="item-card">
        <Row>
          <Col>
            <img className="item-img" src={`/photos/${props.filename}`} />
          </Col>
          <Col>
            <p>
              <span className="icon">${props.price}</span>{" "}
              <span>
                <FontAwesomeIcon
                  style={{ color: saved ? "red" : null }}
                  icon={faHeart}
                  onClick={handleSave}
                  size="2x"
                />
              </span>
            </p>
            <p>{props.name}</p>
            <p>Condition: {props.condition}</p>
            <p>Ph: {props.ph}</p>
            <p>Address: {props.address}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
}
