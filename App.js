// const root= responsive
// document.createElement("div")

console.log("React", React);
console.log("ReactDom", ReactDOM);

const heading1 = React.createElement("h1",{className :"headng1"},"Chennei Super Kings");
const heading2 = React.createElement("h3",{className :"headng3"},"Mumbai Indians");

const container1 = React.createElement("div",{className:"container"}, [heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);
