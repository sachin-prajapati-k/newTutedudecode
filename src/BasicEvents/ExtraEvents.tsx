import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import SelfButton from "./SelfButton";

export const ExtraEvents = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("hello");
  };

  const onMouseEnter = () => {
    prompt("hello");
  };
  const handleCountPlus = () => {
    setCount((prev) => prev + 1);
  };
  const handleCountMinus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <h3>{count}</h3>

      <SelfButton
        color="blue"
        onButtonClick={handleCountPlus}
        children={"+ Add"}
      />

      <SelfButton
        color="yellow"
        onButtonClick={handleCountMinus}
        children={"- Minus"}
      />

      <SelfButton
        color="green"
        onButtonClick={() => setCount(0)}
        children={"reset"}
      />
      <SelfButton
        color="orange"
        onButtonClick={() => setCount(100)}
        children={"set 100"}
      />
    </>
  );
};
