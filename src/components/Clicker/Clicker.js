import Counter from "../Counter/Counter";
import { useState } from "react";

function Clicker() {
  const [numClick, setNumClick] = useState(0);

  const addPoint = () => {
      setNumClick(prevCount => prevCount + 1); 
  };
  const myComponentStyle = {
    fontSize: 30,
    borderRadius: "50%", 
    backgroundColor: "#7773ff",
 }
  return(
      <>
          <div>
              <input type="button" onClick={addPoint} value="+1" style={myComponentStyle} />
          </div>
          <Counter Clicks={numClick} />
      </>
  );
}

export default Clicker;
