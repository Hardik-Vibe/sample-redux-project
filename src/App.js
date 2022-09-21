import "./styles.css";
import Counter from "./feature/counter/counter";
import CounterContainer from "./feature/counter/index";


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CounterContainer></CounterContainer>
    </div>
  );
}
