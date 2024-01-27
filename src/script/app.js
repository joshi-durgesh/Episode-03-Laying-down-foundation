//importing react in js
import React from "react";
import ReactDOM from "react-dom/client";

//How we create element using jsx
const Heading = () => {
  return (
    <div>
      <h1>This heading is created with jsx 💥 in component</h1>
      <p>This is a paragraph</p>
    </div>
  );
};

// const contentJsx = <div className='content'>{Heading()}</div>;
//or
const contentJsx = (
  <div className='content'>
    <Heading />
  </div>
);

//creating root to render our element
const root = ReactDOM.createRoot(document.getElementById("container"));

//rendering our elemnt
root.render(contentJsx);
