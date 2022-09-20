import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy
} from "../../store/counter/counter.slice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Count : {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(10))}>
          Increment By 10
        </button>
      </div>
    </div>
  );
}
