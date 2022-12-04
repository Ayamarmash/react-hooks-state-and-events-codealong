import React, { useState } from "react";

function Toggle() {
  const [buttonState, setButton] = useState(false)
  const [buttonColor, setButtonColor] = useState("white")
  function handleOnOffButton(){
    setButton((buttonState)=>!buttonState)
    {buttonState ? setButtonColor("red") : setButtonColor("white")}
    console.log("State is " + buttonState + "  Color is " + buttonColor)
  }
  return <button onClick={handleOnOffButton} style={{backgroundColor: buttonColor}}>
    {buttonState ? "ON" : "OFF"}
  </button>;
}

export default Toggle;
