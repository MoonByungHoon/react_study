import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import "../layout/layout.css";

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    color: "#111",
    backgroundColor: "#eee",
    justifyContent: "center",
  },
  h4: {
    marginLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  ul: {
    width: 400,
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  li: {
    marginLeft: 10,
    marginRight: 10,
  },
};

function Header() {
  const { isDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.header, backgroundColor: "#333", color: "#eee" };
  };

  return (
    <>
      <header style={isDark ? styles.header : setDark()}>
        <img src="logo192.png" alt="" style={styles.avatar} />
        <h4 style={styles.h4}>
          <i className="fa-solid fa-house-user"></i>
          Bitcamp
        </h4>

        <nav>
          <NavLink to={"/"} style={styles.li}>
            Home
          </NavLink>
          <NavLink to={"javascript"} style={styles.li}>
            JavaScript
          </NavLink>
          <NavLink to={"react"} style={styles.li}>
            React
          </NavLink>
          <NavLink to={"java"} style={styles.li}>
            Java
          </NavLink>
          <NavLink to={"springboot"} style={styles.li}>
            Springboot
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
