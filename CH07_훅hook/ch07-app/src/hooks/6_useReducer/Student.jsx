import React from "react";

function Student({ id, name, isHere, dispatch }) {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "red" : "white",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch({ type: "check-student", payload: { id } });
        }}
      >
        {/* 실질적인 출력 코드 */}
        {`${name} (${id})`}

        <button
          className="btn btn-danger ml-3"
          onClick={() => {
            dispatch({ type: "del-student", payload: { id } });
          }}
        >
          삭제
        </button>
      </span>
    </div>
  );
}

export default Student;
