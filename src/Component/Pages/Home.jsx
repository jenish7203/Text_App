import React, { useState } from 'react'

const Home = (props) => {

  const [text, setText] = useState('');


  const handleClickUP = () => {
    const NewText = text.toUpperCase();
    setText(NewText);
  }

  const handleClickLO = () => {
    const NewText = text.toLocaleLowerCase();
    setText(NewText);
  }

  const handleCleaeText = () => {
    const NewText = '';
    setText(NewText);
  }

  const handleCopyText = () => {
    var CopyText = document.getElementById("myBox");
    CopyText.select();
    navigator.clipboard.writeText(CopyText.value);
  }


  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };


  const handleOnChang = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <div className="container my-5">
        <div class="mb-3">
          <h3 for="myBox" class="form-label">
            {props.heding}
          </h3>
          <textarea
            class="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChang}
            placeholder=""
            value={text}
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary m-1"
          onClick={handleClickUP}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          class="btn btn-primary m-1"
          onClick={handleClickLO}
        >
          Convert To Lowercase
        </button>
        <button
          type="button"
          class="btn btn-primary m-1"
          onClick={handleCleaeText}
        >
          Clear Text
        </button>
        <button
          type="button"
          class="btn btn-primary m-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          type="button"
          class="btn btn-primary m-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <h6>Words - {text.split("").length}</h6>
        <h6>Charaters - {text.length}</h6>
        <h6>Minutes Read - {0.008 * text.split(" ").length}</h6>
      </div>

      <div className="container my-6 p-3" style={{ border: "3px dashed red" }}>
        <h3>Preview 👇🏻</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Home