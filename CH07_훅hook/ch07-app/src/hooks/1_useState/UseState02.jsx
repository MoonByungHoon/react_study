import React from 'react'
import { useState } from 'react'

function UseState02() {

  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  }

  const uploadHandler = () => {
    setNames((preState) => {

      return [...preState, input];
    });
  }

  return (
    <div className='container'>
      <div style={{ display: 'flex' }}>
        <input type='text' className='form-control' placeholder='이름을 입력해주세요.'
          onChange={inputChangeHandler} />
        <button className='btn btn-success ms-1' style={{ width: 200 }} onClick={uploadHandler}>업로드</button>
      </div>
      <textarea className='form-control mt-1' rows={10} defaultValue={names.toString().split(',').join('\n')} />
    </div>
  )
}

export default UseState02