import React, { useMemo, useState } from "react";

function Page() {
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useState(0);
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const result = useMemo(() => {
    return (
      <div style={{ color: randomColor }}>
        Counter doubled Value {counter}: {counter * 2}
      </div>
    );
  }, [counter]);
  return (
    <>
      {result}
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setTest(test + 1)}>Test</button>
      </div>
    </>
  );
}

export default Page;
