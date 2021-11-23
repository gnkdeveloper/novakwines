import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Counter = () => {
  const [clicks, setClicks] = useState(0);

  const addClick = () => {
    setClicks(clicks + 1);
  };

  const removeClick = () => {
    setClicks(clicks - 1);
  };

  return (
    <div>
      <h1>{clicks}</h1>
      <Button variant="dark m-1" onClick={() => addClick()}> Comprar unidad</Button>
      <Button variant="dark m-1" onClick={() => removeClick()}>Sacar unidad del carrito</Button>
    </div>
  );
};

export default Counter;
