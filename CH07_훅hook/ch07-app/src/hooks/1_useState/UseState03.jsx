import React from 'react'
import { useState } from 'react'
import UseState01 from './UseState01';

function UseState03() {

  const [time, setTime] = useState(0);

  const timeHandler = () => {
    setTime(time + 1);
  }

  return (
    <div>
      <p>You clicked {time} times</p>
      <button onClick={timeHandler}>Click Me</button>
    </div>
  )
}

export default UseState03