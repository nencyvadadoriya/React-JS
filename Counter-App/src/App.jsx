import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log("api called" , count);
  }, []);  // sirf jab count change hoga tab chalega

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
