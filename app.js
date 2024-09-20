// const heading = React.createElement(
//     "h1", {id: "heading", xyz: "abc"}, "Hello World from React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root")).render(heading);


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"This is h1 tag"),
        React.createElement("h2",{},"This is h2 tag"),
    ]),
    React.createElement("div",{div:"child"},[
        React.createElement("h1",{},"this is h1 Tag"),
        React.createElement("h2",{},"this is h2 tag"),
    ]),
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);