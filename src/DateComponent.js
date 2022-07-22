import React from "react";
import "./styles.css";

const DateComponent = () => {
  const date = new Date();
  const currentDate = date.getHours();

  let greetings;
  const customStyle = {
    color: ""
  };

  if (currentDate < 12) {
    greetings = "Good Morning";
    customStyle.color = "red";
  } else if (currentDate < 18) {
    greetings = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greetings = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h2 className="heading1" style={customStyle}>
      {greetings}
    </h2>
  );
};

export default DateComponent;
