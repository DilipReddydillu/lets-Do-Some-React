const heading = React.createElement("h1", {id:"hello"}, "Hello React!!!");
console.log(heading);
const subHeading = React.createElement("h3", {id:"sub"}, 
[
    React.createElement("span",{},"sub heading "),
    React.createElement("span",{}," from React!")
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading,subHeading]);
console.log(root);
