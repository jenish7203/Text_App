import React, { useState } from 'react'

const Home = (props) => {

  const [text, setText] = useState('');


  const handleClickUP = () => {
    const NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert("Converted To UpperCase", "success : ");
  }

  const handleClickLO = () => {
    const NewText = text.toLocaleLowerCase();
    setText(NewText);
    props.showAlert("Converted To LowerCase", "success : ");
  }

  const handleCleaeText = () => {
    const NewText = '';
    setText(NewText);
    props.showAlert("Text Clear", "primary : ");
  }

  const handleCopyText = () => {
    // var CopyText = document.getElementById("myBox");
    // CopyText.select();
    // navigator.clipboard.writeText(CopyText.value);
    navigator.clipboard.writeText(text);
    props.showAlert("Copy To Text", "info : ");
  }


  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Remove", "secondary : ");
  };


  const handleOnChang = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h3 className="form-label">{props.heding}</h3>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChang}
            placeholder=""
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleClickUP}
          disabled={text.length === 0}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleClickLO}
          disabled={text.length === 0}
        >
          Convert To Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleCleaeText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleCopyText}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <h6>
          Words -{" "}
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </h6>
        <h6>Charaters - {text.length}</h6>
        <h6>Minutes Read - {0.008 * text.split(" ").filter((element)=>{
          return element.length !== 0
        })}</h6>
      </div>

      <div
        className="container my-6 p-3"
        style={{
          border: "3px dashed red",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Preview 👇🏻</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the Textbox above to Preview it Here"}
        </p>
      </div>
    </>
  );
}

export default Home