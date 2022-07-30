import React from 'react'
import { useState, useRef } from 'react'

function UseRef02() {

  // State변수 사용
  const [count, setCount] = useState(0);

    // Ref변수 사용
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  }

  // 랜더링이 되지 않기 때문에 웹페이지에서 변경이 화면에 적용이 안된다.
  const increaseCountRef = () => {
    countRef.current++;
    console.log(countRef.current)
  }

  return (
    <div className='container'>
      <h3>State : {count}</h3>
      <h3>Ref &nbsp;: {countRef.current}</h3>

      <button className='btn btn-info' onClick={increaseCountState}>
        State &nbsp;
        <i className='fa-solid fa-arrow-up-from-bracket'></i>
      </button>
      <button className='btn btn-success' onClick={increaseCountRef}>
        Ref &nbsp;
        <i className='fa-solid fa-arrow-up-from-bracket'></i>
      </button>

    </div>
  )
}

export default UseRef02