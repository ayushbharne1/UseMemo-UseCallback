import React, { useCallback, useMemo, useState } from 'react'
import Child from './componenets/Child';

const App = () => {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(50)

  // const multiply = ()=>{
  //   console.log("inside multiply function")
  //   return add * 2;
  // }

  // useMemo is used to memoize computed values
  // It will only recompute the value when dependencies change ([add] in this case)
  // This prevents unnecessary recalculations on every render
  const multiplymemo = useMemo(()=>{
    console.log("inside multiply function")
    return add * 2 }, [add])

  // useCallback is used to memoize functions that are passed as props to child components
  // It prevents the function from being recreated on every render
  // The function will only be recreated when dependencies change ([sub] in this case)
  const changeSub = useCallback(() => {
    setsub(sub - 1);
  }, [sub]);

  return (
    <div>
      <Child Changsub={changeSub}/>
      <h1>multiply: {multiplymemo}</h1>
      <h1>Addition: {add}</h1>
      <h1>Subtraction: {sub}</h1>
      <button onClick={() => setadd(add + 1)}>Increment</button>
      <button onClick={() => setsub(sub - 1)}>Decrement</button>
      
    </div>
  )
}

export default App