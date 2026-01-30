/*parent
    child1
        h1
        h2
    child2
        h1
        h2

*/

import React from "react";
import { createRoot } from "react-dom/client";

/* ep1 code:
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "h1-1" }, "React course"),
    React.createElement("h2", { id: "h2-1" }, "rekha")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "h1-2" }, "i am h1 tag"),
    React.createElement("h2", { id: "h2-2" }, "i am h2 tag")
  )
);
*/
const HeadingComponent2 = () => {
    return (<h1 className="heading">Namaste React</h1>)
} 

const HeadingComponent = () => {
    return (
        <div>
        <HeadingComponent2 />
        <h1 className="heading"> Namaste React from component</h1>
        </div>
    )
}



const root = createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);