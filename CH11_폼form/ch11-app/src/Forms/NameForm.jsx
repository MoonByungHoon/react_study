import React from "react";
import { useState } from "react";

function NameForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    alert("입력한 이름 : " + value);
    e.preventDefault();
  };

  // 입력값 변경 시 호출(변경된 value 저장)
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length > 8) {
      return alert("입력 문자열이 너무 깁니다.") + setValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Name :</h4>
          <input
            className="form-control"
            type="text"
            value={value}
            placeholder="input your name"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn btn-success ms-1">
          Submit
        </button>
      </form>
    </>
  );
}

export default NameForm;
