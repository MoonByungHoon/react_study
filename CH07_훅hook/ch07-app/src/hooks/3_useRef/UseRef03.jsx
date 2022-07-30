import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

// 랜더링이라는 것은 해당 영역을 다시 실행하게 되는 것이다.
function UseRef03() {
  const [renderer, setRenderer] = useState(0);

  const countRef = useRef(0);

  // 다시 실행으로 인해서 0으로 재할당됨.
  let countVar = 0;


  const increaseCountRef = () => {
    countRef.current++;
    console.log('Ref=', countRef.current);
  }

  const increaseCountVar = () => {
    countVar++;
    console.log('Var=', countVar);
  }

  const increaseCountRenderer = () => {
    setRenderer(renderer + 1);
  }

  return (
    <div className='container'>
      <h3>Ref : {countRef.current}</h3>
      <h3>Var : {countVar}</h3>
      <hr />
      <button className='btn btn-success mb-1' onClick={increaseCountRef}>
        Ref
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-info mb-1' onClick={increaseCountVar}>
        Var
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-danger' onClick={increaseCountRenderer}>
        Rendering
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </div>
  )
}

export default UseRef03