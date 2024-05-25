import "./App.css";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply } from "./Redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar></Navbar>
      <button onClick={() => dispatch(decrement())}>-</button>
      &nbsp; &nbsp;
      <span> I am the counter = {count}</span>
      &nbsp; &nbsp;
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>*</button>
    </>
  );
}

export default App;
