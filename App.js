import React from "react";
import ReactDOM from "react-dom/client";

// JSX ->(Babel)=> React.createElement => ReactElement - JS Object => render(element) => HTML Element
const jsxHeading = <h1 className="heading">React Learnings using JSX 🚀</h1>;

// React Component
const TitleComponent = () => (
  <div className="container">
    <h1>Title Component🚀</h1>
  </div>
);

// React Component
const HeadingComponent = () => (
  <div className="container">
    <TitleComponent />
    <h1>React Learnings React Functional Components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
