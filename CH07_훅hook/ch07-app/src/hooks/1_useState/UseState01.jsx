import React from 'react'
import { useState } from 'react'

const UseState01 = () => {

  const [time, setTime] = useState(10); // useState의 구조는 뒤에 구조와 같다. [state, setState] 즉, 구조분해 할당된다.

  const handleClick = () => {
    console.log("타임 변경 전" + time); //22

    setTime(time + 1); //23 setTime 함수를 호출하면서 값은 변경이 되지만 랜더링이 끝나야 변수에 직접 적용이된다.

    console.log("타임 변경" + time); //22

    if (time == 23) {
      console.log("타임 초과");
      return setTime(0);
    }

    console.log("타임 적용 전" + time); //22
  };

  console.log("렌더링됨.");

  return (
    <>
      <span>현재 시각 : {time}시</span>
      <button className='btn btn-warning' onClick={handleClick}>Update</button>
    </>
  )
}

export default UseState01