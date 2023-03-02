import {useState, useEffect} from "react";

function UseState() {
  const [ counter, setCounter] = useState(0);
  const [ keywords, setKeywords]  = useState("");
  const onChange = (event) => {
    setKeywords(event.target.value)
  };
  console.log("i run all the time")
  const onClick = () => setCounter((prev) => prev + 1);
  
  useEffect(() => {
    if (keywords !== "" && keywords.length > 5) {
      console.log("Search for", keywords)
    }
  }, [keywords])
  useEffect(() => {
    console.log("clicked", counter)
  }, [counter])
  return (
    <div className="App">
      <input type="text" placeholder="Search here" value={keywords} onChange={onChange} />
      <h1>{counter}</h1>
      <button type="button" onClick={onClick}>Counter</button>

    </div>
  );
}

export default UseState;
