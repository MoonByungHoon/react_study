import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const ACTION_TYPES = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// const reducer = (state, action) => {

// }

const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;

    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;

    default:
      return state;
  }
};

function UseReducer02() {
  const [money, setMoney] = useState(0);
  // const [state, dispatch함수] = useReducer(처리해줄 도구, 상태 변수 초기값)
  // dispatch는 하나의 인터페이스(?)라고 생각하면 됨.
  // const[account, dispatch]에서 dispatch 데이터들을
  // useReducer(처리해줄 도구, 상태 변수 초기값)의 처리해줄 도구(메소드)로
  // 보내서 처리한 결과값을 account가 받는다.
  const [account, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <h6>useReducer 은행에 오신것을 환영합니다.</h6>
      <h2>잔고 : {account}</h2>
      <div>
        <input
          className="form-control mb-2"
          type={"number"}
          value={money}
          step="1000"
          onChange={(e) => {
            setMoney(parseInt(e.target.value));
          }}
        />
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch({ type: ACTION_TYPES.DEPOSIT, payload: money });
          }}
        >
          예금
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: ACTION_TYPES.WITHDRAW, payload: money });
          }}
        >
          출금
        </button>
      </div>
    </div>
  );
}

export default UseReducer02;
