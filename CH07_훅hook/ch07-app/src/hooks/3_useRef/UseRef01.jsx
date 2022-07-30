import React, { useEffect, useRef } from 'react'

// useRef()
// 참조(Reference)를 사용하기 위한 훅
// 언마운트되기 전까지는 계속 유지된다.
// 단 랜더링은 하지 않는다.
// 반환 값 : 레퍼런스 객체(ref object)
// const ref = useRef(value) == {current : value}
// ref.current

// ref 객체는 컴포넌트의 전 생애주기 전체에 걸쳐서 유지가된다.
// 컴포넌트가 재랜더링되더라도 초기화되지 않는다.

// 1. DOM 요소에 접근할 때(document.querySelect())
// 2. 저장공간으로 사용

function UseRef01() {
  const inputRef = useRef();
  const imgRef = useRef();

  const onButtonClick = () => {
    alert(`환영합니다. ${inputRef.current.value}`);

    if(imgRef.current.style.visibility == 'visible'){
      imgRef.current.style.visibility = 'hidden';
    } else {
      imgRef.current.style.visibility = 'visible';
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className='container'>
      <img ref={imgRef} src='logo192.png' alt='' style={{ visibility: 'hidden' }} />
      <div className='d-flex'>
        <input ref={inputRef} className='form-control w-auto' type='text' placeholder='아이디를 입력해주세요' />
        <button onClick={onButtonClick} className='btn btn-info ml-1'>로그인</button>
      </div>
    </div>
  )
}

export default UseRef01