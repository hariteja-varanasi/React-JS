import React, {useState} from 'react';

const ExampleFour = (props) => {
    //datatype [state, handler] = useState(initial value);

    const [title, setTitle] = useState("Welcome to state in react");
    const [x, setX] = useState(123);
    const [view, setView] = useState(false);
    const [color, setColor] = useState(['red', 'white', 'blue']);

    const modifyTitle = () => {
        setTitle("The title is just modified");
    }

    const resetTitle = () => {
        setTitle("Welcome to state in react");
    }

    const incrementX = () => {
        setX(x+1);
    }

    const incrementXbyTen = () => {
        setX(x+10);
    }

    const incrementXbyFifty = () => {
        setX(x+50);
    }

    const resetX = () => {
        setX(124);
    }

    return (
        <div className="lead border p-3 m-3">
            <h3 className="display-4 text-capitalize">state in function expression</h3>
            <p className="fs-1 text-capitalize">Title is : {title}</p>
            <p className="fs-1">x is: {x}</p>
            <p className="fs-1">{view ? "true" : "false"}</p>
            <ol className="list-group">
                {color.map((item, index) => {
                    return (
                        <li key={index} className={index == 0 ? "list-group-item fs-1 text-capitalize bg-warning" : "list-group-item fs-1 text-capitalize"}>{index} : {item}</li>
                    )
                })}
            </ol>
            <hr />
            <button className="btn btn-outline-warning fs-3 mx-2" onClick={modifyTitle}>Change Title</button>
            <button className="btn btn-outline-warning fs-3 mx-2" onClick={resetTitle}>Reset Title</button>
            <button className="btn btn-outline-warning fs-3 mx-2" onClick={incrementX}>Increment X</button>
            <button className="btn btn-outline-warning fs-3 mx-2" onClick={incrementXbyTen}>Increment X + 10</button>
            <button className="btn btn-outline-warning fs-3 mx-2" onClick={incrementXbyFifty}>Increment X + 50</button>
            <button className="btn btn-outline-warning fs-3 mx-2" onClick={resetX}>Reset X</button>
        </div>
    );
};

export default ExampleFour;
