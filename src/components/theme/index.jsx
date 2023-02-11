import React, { useEffect, useState } from "react";
import "./styles.scss";
import { ImCog } from "react-icons/im";
import setTheme from "../../helpers/theme";

const colorArrays = [
  {
    id: "yellow",
    bgcolor: "#ffdd40",
  },
  {
    id: "red",
    bgcolor: "#E82A2A",
  },
  {
    id: "green",
    bgcolor: "#6ac045",
  },
  {
    id: "blue",
    bgcolor: "#5078ff",
  },
];

const Theme = () => {
  const [theme, setCurrentTheme] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId);
    setToggle(false);
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div className="theme-wrapper__toggle-icon">
        <ImCog onClick={() => setToggle(!toggle)} size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorArrays.map((item, key) => (
            <li
              onClick={() => handleToggleTheme(item.id)}
              key={key}
              style={{ background: item.bgcolor }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
