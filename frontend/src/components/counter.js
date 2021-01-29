import { useState } from "react";

const Counter = () => {
  // 초기값
  const [count, setCount] = useState(0);

  const onClickIncrease = () => {
    setCount(count + 1);
  };
  const onClickDecrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>Counter</div>
      <div>{count}</div>
      <button onClick={onClickIncrease}>+</button>
      <button onClick={onClickDecrease}>-</button>
    </>
  );
};

export default Counter;
