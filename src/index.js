import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div className="App">
      <strong>Hello</strong> Sarvanan {5 + 3}
      <div>
        <strong>Hello</strong> Srinath {5 + 3}
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
