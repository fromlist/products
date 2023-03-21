import {useState, useEffect} from "react";

function Hello(){
	function effectCreateFn() {
		console.log("Created");
		return effectDestroyFn;

	}
	function effectDestroyFn() {
		console.log("Destroyed")
	}
	useEffect(effectCreateFn, [])
	return (
		<h1>Hello</h1>
	)
}

function CleanUp() {
  const [ showing, setShowing] = useState(false)

  const onClick = () => {
	setShowing((prev) => !prev)
  }
  return (
    <div>
		{showing ? <Hello /> : null }
      <button type="button" onClick={onClick}>{showing ? "hide" : "show" }</button>
    </div>
  );
}

export default CleanUp;
