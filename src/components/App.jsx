import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [mouse, setmouse] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    setHeading(name);
  }
  function handleMouse() {
    setmouse(true);
  }
  function handleMouseout() {
    setmouse(false);
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: mouse ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouse}
          onMouseOut={handleMouseout}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
