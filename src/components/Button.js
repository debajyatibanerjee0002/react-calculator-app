import React from "react";
import Classes from "../styles/Button.module.css";
const Button = (props) => {
  const classStyle = `${Classes} ` + props.className;
  const clickHandler = () => {
    props.dispatch({ type: props.doAction, payload: props.sign });
  };
  return (
    <button className={classStyle} onClick={clickHandler}>
      {props.sign}
    </button>
  );
};

export default React.memo(Button);
