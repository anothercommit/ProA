import { useState } from "react";
import Button from "./components/Button";

export default function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </>
  );
}
