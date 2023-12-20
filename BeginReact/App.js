/*
    <div id="parent">
        <div id="child1">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement(
    "div", {id : "parent"},
    [ 
    React.createElement("div", { id : "child1" }, 
        [
            React.createElement("h1", { id : "heading1"}, "I'm h1 tag!"), 
            React.createElement("h2", { id : "heading2"}, "I'm h2 tag!")
        ]
    ),React.createElement("div", { id : "child2" }, 
    [
        React.createElement("h1", { id : "heading3"}, "I'm h1 tag!"), 
        React.createElement("h2", { id : "heading4"}, "I'm h2 tag!")
    ]
)]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);