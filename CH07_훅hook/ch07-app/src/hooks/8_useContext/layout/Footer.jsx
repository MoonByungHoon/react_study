import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const styles = {
  footer: {
    backgroundColor: "#eee",
    height: 100,
    display: "flex",
    // flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    color: "#111",
  },

  contain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
  },
};

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.footer, backgroundColor: "#333", color: "#eee" };
  };

  const toggle = () => {
    setIsDark(!isDark);
    document.querySelector(".btn").innerHTML = isDark ? "Light" : "Dark";
  };

  return (
    <>
      <footer style={isDark ? styles.footer : setDark()}>
        <div style={styles.contain}>
          Currently v5.2.1 Code licensed BIT 211, docs CC BY 3.0
          <button className="btn btn-danger ml-5" onClick={toggle}>
            Dark
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
