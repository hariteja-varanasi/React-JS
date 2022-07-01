import React, { useState } from 'react';
/* useState => is built in hook method, used to declare the state and handler method */

function ExampleThree(props) {
    //datatype [state, handler] = useState(initial value);

    const [title, setTitle] = useState("Welcome to state in react");
    const [x, setX] = useState(123);
    const [view, setView] = useState(false);
    const [color, setColor] = useState(['red', 'white', 'blue']);

    return (
        <div className="lead border border-5 p-3 m-3">
            <h3 className="display-4 text-capitalize">State in functional component</h3>
            <div className="lead border p-3 m-3">
                <p className="fs-2 text-capitalize">Title from the state : {title}</p>
                <p className="fs-2">x is : {x}</p>
                <p className="fs-2 text-capitalize">{view ? "true" : "false"}</p>
                <ol className="list-group">
                    {
                        color.map((item, index) => {
                            return (
                                <li className={index == 0 ? "list-group-item fs-2 text-capitalize bg-info"
                                    : "list-group-item text-capitalize fs-2"}>
                                    {index} : {item}</li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    );
}

export default ExampleThree;