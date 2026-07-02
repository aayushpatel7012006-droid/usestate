import React, { useState } from 'react';

function app() {
const [counter,setCounter] = useState(0);
   const incrementCounter = () => {
      setCounter(counter + 1);
   }

 const[negcounter,setnegCounter] = useState(0);
 const decrementCounter = () => {
  setnegCounter(negcounter - 1);
  }

  const resetcounter = () => {
    setCounter(0);
    setnegCounter(0);
  }


  
   return (
    <div>
      <button onClick={incrementCounter}>
          Clicked {counter} times
        </button>
      <button onClick={decrementCounter}>
          Clicked {negcounter} times
        </button>
      <button onClick={resetcounter}>
          Reset
        </button>
</div>
        
   );


}
export default app;