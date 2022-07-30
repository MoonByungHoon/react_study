import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

function UseCallback02() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  // 콜백을 쓰지 않을 경우.
  const someFunction2 = (() => {
    console.log(`someFunc.number : ${number2}`)
  });


  const someFunction = useCallback(() => {
    console.log(`someFunc.number : ${number}`)
  }, [number]); //처음 되는 랜더링만 적용됨.(첫 주소값을 그대로 유지함.)

  useEffect(() => {
    console.log(`someFunc이 변경되었습니다.`);
  }, [someFunction]);

  useEffect(() => {
    console.log(`someFunc2이 변경되었습니다.`);
  }, [someFunction2]);

  return (
    <div className='container'>
      <input className='form-control' type={'number'} value={number} onChange={(e) => {setNumber(e.target.value)}} />
      <button className='btn btn-info' onClick={someFunction}>Call someFunc</button>
      <input className='form-control' type={'number'} value={number2} onChange={(e) => {setNumber2(e.target.value)}} />
      <button className='btn btn-info' onClick={someFunction2}>Call someFunc2</button>
    </div>
  )
}

export default UseCallback02