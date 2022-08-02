import React from "react";
import { useState } from "react";

function FruitSelect() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    alert("선택한 과일 : " + value);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h5>음식을 선택하세요.</h5>
        <select className="form-select" value={value} onChange={handleChange}>
          <option>Open this select menu</option>
          <option value={"wm"}>🍉</option>
          <option value={"m"}>🥭</option>
          <option value={"p"}>🍑</option>
          <option value={"sb"}>🍓</option>
          <option value={"t"}>🍅</option>
        </select>
      </label>
      <button type="submit" className="btn btn-success ms-1">
        Submit
      </button>
    </form>
  );
}

export default FruitSelect;
