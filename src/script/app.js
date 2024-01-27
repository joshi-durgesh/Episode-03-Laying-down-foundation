//importing react in js
import React from "react";
import ReactDOM from "react-dom/client";

//How we create element using react
const contentReact = React.createElement(
  "h1",
  { className: "heading" },
  "This heading is created with React createElement 🚀"
);

//creating root to render our element
const root = ReactDOM.createRoot(document.getElementById("container"));

//rendering our element to root
root.render(contentReact);
