import "./App.css";
import "./index.css";
import Circle from "./components/Circle";
import Button from "./components/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import { increment, decrement,reset} from "./features/counter/CounterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <Circle count={count} />
      <div className="buttons">
        <Button onClick={() => dispatch(decrement(5))}>Decrease 5</Button>
        <Button onClick={() => dispatch(decrement(1))}>Decrease 1</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        <Button onClick={() => dispatch(increment(1))}>Increase 1</Button>
        <Button onClick={() => dispatch(increment(5))}>Increase 5</Button>
      </div>
    </>
  );
}

export default App;
