function Counter({ Clicks }) {
  console.log("clicked");
  return(
    <>
        <div>
            <h2 id="CountedPoints">{Clicks}</h2>
        </div>
    </>
  );
}

export default Counter;
