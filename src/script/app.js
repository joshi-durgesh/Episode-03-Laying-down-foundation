//importing react in js
import React from "react";
import ReactDOM from "react-dom/client";

//How we create element using react
const contentReact = React.createElement(
  "h1",
  { className: "heading" },
  "This heading is created with React createElement 🚀"
);

//How we create element using jsx
const contentJsx = (
  <h1 className='heading'>This heading is created with jsx 💥</h1>
);

//creating root to render our element
const root = ReactDOM.createRoot(document.getElementById("container"));

/**
 * rendering our element to root
 *
 * How we render jsx element
 *   -Rendering is same as rendering react element
 *
 * How rendering same like react element
 *   -jsx is converted to react element with the help of parcel
 *
 * Does parcel do it by itsel
 *    -No parcel manages the jsx element, it give the transpilation task to bable it is another module that parcel required to compile/transpil our jsx to react elment
 */

// root.render(contentReact);
root.render(contentJsx);
