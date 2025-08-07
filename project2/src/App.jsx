import React, { useState } from 'react';
import './App.css';

function App() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  const increaseCount = (setCount, count) => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Maximum limit is 10");
    }
  };

  const decreaseCount = (setCount, count) => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("Minimum limit is 1");
    }
  };

  return (
    <div className="container">
      <h1>Top Products</h1>
      <div className="card-container">

        <div className="card">
          <img src="https://image.hm.com/assets/hm/89/b1/89b1e7817f344047b47ddcc69d869ba93a10480a.jpg?imwidth=2160" alt="T-Shirt" />
          <h3>T-Shirt</h3>
          <p className="desc">Cotton half-sleeve T-shirt for daily comfort wear.</p>
          <p>Quantity: {count1}</p>
          <div className="buttons">
            <button onClick={() => decreaseCount(setCount1, count1)}>-</button>
            <button onClick={() => increaseCount(setCount1, count1)}>+</button>
          </div>
        </div>

        <div className="card">
          <img src="https://lifewithjazz.com/wp-content/uploads/2023/04/4looksstylingjeansattheoffice_2.jpg" alt="Top" />
          <h3>Top</h3>
          <p className="desc">Lightweight sleeveless top, perfect for casual office wear.</p>
          <p>Quantity: {count2}</p>
          <div className="buttons">
            <button onClick={() => decreaseCount(setCount2, count2)}>-</button>
            <button onClick={() => increaseCount(setCount2, count2)}>+</button>
          </div>
        </div>

        <div className="card">
          <img src="https://www.fashiongonerogue.com/wp-content/uploads/2023/06/Wide-Leg-Pants-Sleeveless-Top-Business-Casual-Women.jpg" alt="Product 3" />
          <h3>Business Look</h3>
          <p className="desc">Stylish wide-leg pants with sleeveless top, ideal for meetings.</p>
          <p>Quantity: {count3}</p>
          <div className="buttons">
            <button onClick={() => decreaseCount(setCount3, count3)}>-</button>
            <button onClick={() => increaseCount(setCount3, count3)}>+</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
