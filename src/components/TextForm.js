import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handleLowerClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleOnClearClick = () => {
    let newText = " "
    setText(newText)
    props.showAlert("Cleared Text", "success")
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  //useState
  const [text, setText] = useState("");
  //   text = "new text"; //wrong way to change the state
  //   setText = ("new text"); //correct way to change the state

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard", "success")
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join[" "]);
    console.log("removed");
    props.showAlert("Removed Extra Spaces", "success")
  };
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black", }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }} ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleOnClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black", }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
