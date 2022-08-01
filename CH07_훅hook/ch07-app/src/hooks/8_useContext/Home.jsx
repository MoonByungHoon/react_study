import React from "react";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Page from "./pages/Page";

function Home() {
  //isDark는 전역변수 -> 수 많은 컴포넌트가 사용함.
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      {/* 공통으로 사용할 값을 태그 형식으로 감싸주면 자식들이 전부 사용 가능하다. */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </>
  );
}

export default Home;
