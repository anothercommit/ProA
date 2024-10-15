import Button from "./components/Button";

export default function App() {

  const [count, setCount] = useState(0);

  function handler() {
    setCount(count + 1);
  }

  return (
    <Button />
  );
}
