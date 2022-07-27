import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Timer from './Timer'

function UseEffect03() {
  const [showTimer, setShowTimer] = useState(false);
  const [btn, setBtn] = useState('btn btn-info');
  const [msg, setMsg] = useState('Toggle Timer Start');

  useEffect(() => { }, [btn]);

  return (
    <div className='container'>
      <button className={btn} onClick={() => {
        setShowTimer(!showTimer);
        setBtn(!showTimer ? 'btn btn-danger' : 'btn btn-info');
        setMsg(!showTimer ? 'Toggle Timer Stop' : 'Toggle Timer Start')
      }}>{msg}</button>
      <hr />
      {
        // 신기하게도 이런 코드가 가능하다. 비교연산으로 처리된다.
        showTimer && <Timer />
      }
    </div>
  )
}

export default UseEffect03