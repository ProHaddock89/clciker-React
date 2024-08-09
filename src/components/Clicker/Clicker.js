import Counter from "../Counter/Counter"

function Clicker () {
    let Points = 0;
    const addPoint = ()=> {
        Points+=1
        console.log(Points)
    }
  return (
    <>
<div>
    <input type="button" onClick={addPoint} value="hi"></input>
</div>
<Counter Clicks={Points} />
</>
  );
}

export default Clicker;