import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseEffect02() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('NickName');

  const updateInput = (e) => {
    setName(e.target.value);
  }

  const updateCount = () => {
    setCount(count + 1);
  }

  // 렌더링마다 매번 사이드 이펙트 실행
  // useEffect(()=> {
  //   console.log('매번 컴포넌트 렌더링 실행');
  // });

  // 카운터가 변경될 때마다 실행
  useEffect(() => {
    console.log('카운터 변경될 떄에 렌더링 실행');
  }, [count]);

  // 아래처럼 배열 안에 원하는 랜더링 대상을 여럿 지정 가능하다.
  // useEffect(()=> {
  //   console.log('카운터 변경될 떄에 렌더링 실행');
  // }, [count, name]);

  // 변경 감지 대상을 없이 코드를 작성하면 첫 실행 1번만 랜더링한다.
  // useEffect(()=> {
  //   console.log('카운터 변경될 떄에 렌더링 실행');
  // }, []);

  return (
    <div className='container'>
      <p>Count : {count}</p>
      <button className='btn btn-success' onClick={updateCount}>Update</button>
      <div>
        <input type='text' onChange={updateInput} />
      </div>
      <p>{name}</p>
    </div>

  )
}

export default UseEffect02