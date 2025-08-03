import { useState } from 'react';
import './assets/App.css';
function App() {
  const [count, setCount] = useState(1);
  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("maximum value is 10");
    }
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("minimum value is 1");
    }
  };
  return (
    <div className="container">
      <div className="card">
        <h2>Counter App</h2>
        <div className="count">{count}</div>
        <div className="buttons">
          <button onClick={increase}>+</button>
          <button onClick={decrease}>−</button>
        </div>
      </div>
    </div>
  );
}
export default App;
