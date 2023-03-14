import { useState } from "react";

const TextForm = (props) => {
  function onchange(element) {
    settext(element.target.value);
  }
  function onClicklower() {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("converter in lowercase", "success");
  }
  function onClick() {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("converter in uppercase", "success");
  }
  function onClickClear() {
    let clearText = " ";
    settext(clearText);
    props.showAlert("Clear all data", "success");
  }
  function onClickTrim() {
    let trim = text.split(/[ ]+/);
    settext(trim.join(" "));
    props.showAlert("converter a normal form", "success");
  }
  const [text, settext] = useState("");
  return (
    <div
      className="container "
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={onchange}
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "light",
            color: props.mode === "dark" ? "white" : "grey",
          }}
          id="myBox"
          rows="9"
        ></textarea>
        <button onClick={onClick} className="btn btn-primary mx-2">
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={onClicklower}>
          Convert to Loweer
        </button>
        <button className="btn btn-primary mx-2" onClick={onClickClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={onClickTrim}>
          Removespace
        </button>
      </div>
      <div className="container my-3">
        <h1>Sumary</h1>
        <p>
          {text.split(" ").length} word and {text.length} cherectore in this
          pergraph
        </p>
        <p>{0.08 * text.split(" ").length} minuts</p>
        <h2>Priview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;
