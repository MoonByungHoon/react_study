import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

// 클래스 컴포넌트 생명주기 함수
// useEffect(콜백함수, 의존성 배열[ , , , ]); 
// useEffect(()=>{}, [의존성 변수1, 변수2, 변수3]); 구조이다.

const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}

// useEffect 테스트
let kiwis = [];

function UseEffect01() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    if (count === 0) {
      kiwis = [];
    }
    kiwis.push('🥝');

    document.title = '🌶' + count + 'update';
    // count를 넣어줌으로 인해서 count가 변경 될때마다 다시 랜더링 된다.
    // 만약 넣어주지 않는다면 1번만 랜더링 되는게 Effect의 특징이다.
  }, [count]);

  return (
    <div className='container' style={styles.container}>

      <span>{kiwis + '💨' + count}</span>
      <hr />
      <p className='h3'>You clicked {count} times</p>
      <hr />

      <button className='btn btn-info' style={styles.btn}
        onClick={() => {
          setCount(count + 1);
        }}>

        <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br />
        <span>Click Me</span>
      </button>
    </div>
  )
}

export default UseEffect01