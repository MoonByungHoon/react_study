import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const hardCalculate = (number) => {
  let total = 0;

  for (let i = 0; i < 99999999; i++) {
    total += i;
  }

  console.log('복잡한 계산');

  return number + total;
}

const easyCalculate = (number) => {

  return number + 1;
}

function UseMemo02() {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  // const hard = hardCalculate(hardNumber);

  // 마지막에 연산된 값을 가지고 있기 때문에 랜더링시에 새로운 연산을 안해도 되므로
  // 메모리 부하를 줄일 수 있다.
  const hard = useMemo(() => {

    return hardCalculate(hardNumber);
  }, [hardNumber]);

  // 랜더링을 시도하여서 hardCalculate의 부하를 테스트
  const easy = easyCalculate(easyNumber);

  return (
    <div>
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Hard working</h5>
        <input
          className='form-control' type='number'
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> ∫∛ ∝^ = {hard}</span>
      </div>
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Simple working</h5>
        <input
          className='form-control' type='number'
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> i + INPUT = {easy}</span>
      </div>
    </div>
  )
}

export default UseMemo02