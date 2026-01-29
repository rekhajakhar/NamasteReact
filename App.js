/*parent
    child1
        h1
        h2
    child2
        h1
        h2

*/

const heading = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{id:"h1"},"i am h1 tag"),
        React.createElement("h2",{id:"h2"},"i am h2 tag")
        ]
        ),
    React.createElement("div",{id:"child1"},
        [React.createElement("h1",{id:"h1"},"i am h1 tag"),
        React.createElement("h2",{id:"h2"},"i am h2 tag")
        ]
        )
    ]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);