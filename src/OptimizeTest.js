import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterA = React.memo(({ count }) => {
    useEffect(() => {
        console.log(`CounterA Update - count ${count}`)
    })
    return <div>{count}</div>
});

const CounterB = ({ obj }) => {
    useEffect(() => {
        console.log(`CounterB Update - count ${obj.count}`);
    })
    return <div>{obj.count }</div>
}

const areEqual = (prevProps, nextPops) => {
  if (prevProps.obj.count === nextPops.obj.count) {
    return true;
  }
  return false;
  // return prevProps.obj.count === nextPops.obj.count 위 식과 같음
  // return true 이전 프롭스 현재 프롭스가 같다 => 리렌더링을 일으키지 않는다
  // return false 이전과 현재가 다르다 => 리렌더링 된다
}

const MemoizedCounterB = React.memo(CounterB, areEqual)

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>count B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
