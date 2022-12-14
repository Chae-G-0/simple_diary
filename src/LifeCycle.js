import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      // Unmount 시점에 실행됨
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Test Component</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   useEffect(() => {
  //     console.log("Mount!");
  //   }, []);

  //   useEffect(() => {
  //     console.log("Update!");
  //   });

  //   useEffect(() => {
  //       console.log(`count is update : ${count}`);
  //       if (count > 5) {
  //           alert("count가 5를 넘었습니다. 따라서 1로 초기화 합니다.");
  //           setCount(1);
  //       }
  //   }, [count]);

  //   useEffect(() => {
  //     console.log(`text is update : ${text}`);
  //   }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
    </div>
  );
};

export default LifeCycle;
