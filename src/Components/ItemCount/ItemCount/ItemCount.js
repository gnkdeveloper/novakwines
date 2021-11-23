import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Counter from "../../Counter/Counter";

const ItemCount = ({title, text, imagenNorton}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagenNorton}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Counter/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCount;
