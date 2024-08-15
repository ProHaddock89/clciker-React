import Counter from "../Counter/Counter"
import { useState } from "react";
function Clicker () {
    const [numClick, setNumClick] = useState(0)
    const addPoint = ()=> {
        setNumClick(setNumClick+1)
        // console.log(Points)
    }
  return (
    <>
<div>
    <input type="button" onClick={addPoint} value="hi"></input>
</div>
<Counter Clicks={numClick} />
</>
  );
}

export default Clicker;