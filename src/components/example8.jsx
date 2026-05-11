import { useState } from "react";

const example8 = () => {
  const [count, setCount] = useState(0);
  // let count = 0; // This will not work, we need to use state to make it reactive.

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default example8;




// Component with state (React hook)