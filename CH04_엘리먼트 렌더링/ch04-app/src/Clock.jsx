import React from "react";

function Clock(props) {
  let now = new Date().toLocaleString();

  return (
    <>
      <span>{now}</span>
    </>
  );
}

export default Clock;