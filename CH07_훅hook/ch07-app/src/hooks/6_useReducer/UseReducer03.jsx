import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import Student from "./Student";

const reducer = (studentsInfo, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,
      };

      return {
        count: studentsInfo.count + 1,
        students: [...studentsInfo.students, newStudent],
      };

    case "del-student":
      return {
        count: studentsInfo.count - 1,
        students: studentsInfo.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };

    case "check-student":
      return {
        count: studentsInfo.count,
        students: studentsInfo.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }

          return student;
        }),
      };

    default:
      return studentsInfo;
  }
};

const intitialState = {
  count: 1,
  students: [
    {
      // Date 의 값은 밀리세컨드 단위로 가면 동일한 값이 나올 일이 거의 없어 고유값으로 사용한다.
      id: Date.now(),
      name: "Tom",
      isHere: false,
    },
  ],
};

function UseReducer03() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, intitialState);

  return (
    <div className="container">
      <div className="alert alert-info">
        <div>
          <i className="fa solid fa-book"></i>
          &nbsp; 출석부
        </div>
        <hr />
        <p>총 학생수 : {studentsInfo.count} 명</p>
        <div>
          <input
            className="form-control"
            placeholder="이름을 입력해주세요."
            spellCheck="false"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="btn btn-success mt-3"
            onClick={() => {
              if (name === "") {
                alert("이름을 입력해주세요.");

                return;
              }

              dispatch({ type: "add-student", payload: { name } });
            }}
          >
            추가
          </button>
        </div>
      </div>

      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            id={student.id}
            isHere={student.isHere}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default UseReducer03;
