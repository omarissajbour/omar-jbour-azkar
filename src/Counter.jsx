/*{
  numoftries = 100,
  backcolor = "blue",
  title = "GoodJob",
}*/

import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";

const Counter = (props) => {
  const title = props.title !== undefined ? props.title : "Good Job";
  const numoftries = props.numoftries !== undefined ? props.numoftries : 100;
  const backcolor = props.backcolor !== undefined ? props.backcolor : "green";

  const [counter, setCounter] = useState(numoftries);
  const [color, setColor] = useState(backcolor);

  useEffect(() => {
    setColor(backcolor);
  }, [backcolor]);

  return (
    <div
      onMouseOut={() => setColor(backcolor)}
      onMouseOver={() => setColor("red")}
      onClick={() => setCounter((prev) => (prev > 0 ? prev - 1 : 0))}
      style={{
  display: "flex",
  flexDirection: "column",
  backgroundColor: color,
  padding: "30px",
 color: "#1e293b",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "16px",
  border: "2px solid rgba(0,0,0,0.1)",
  borderRadius: "16px",
  width: "220px",
  height: "220px",
  justifyContent: "space-around",
  gap: "10px",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
}}

    >
      <div>{title}</div>
      <div>{counter}</div>
      <div>{numoftries}</div>
      <div
        onClick={(event) => {
          event.stopPropagation(); 
          setCounter(numoftries);
        }}
      >
        <i className="fa fa-refresh" style={{ cursor: "pointer" }}></i>
      </div>
    </div>
  );
};

export default Counter;
