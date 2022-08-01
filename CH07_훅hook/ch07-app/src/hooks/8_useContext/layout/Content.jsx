import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Java from "../pages/Java";
import JavaScript from "../pages/JavaScript";
import Reacts from "../pages/Reacts";
import Springboot from "../pages/Springboot";
import Slider from "../ui/Slider";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

const styles = {
  h5: {
    marginTop: 100,
  },

  main: {
    height: 750,
    color: "gray",
    backgroundColor: "white",
  },
};

function Content() {
  const { isDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.main, backgroundColor: "#222", color: "#fff" };
  };

  return (
    <main style={isDark ? styles.main : setDark()}>
      <div className="container text-center">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="js" element={<JavaScript />} />
          <Route path="react" element={<Reacts />} />
          <Route path="java" element={<Java />} />
          <Route path="springboot" element={<Springboot />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;
