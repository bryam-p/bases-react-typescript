import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <hr />
      <CounterEffect />
    </>
  );
}

export default App;
