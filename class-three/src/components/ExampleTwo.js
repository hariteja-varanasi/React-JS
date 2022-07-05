import React from 'react';

const ExampleTwo = (props) => {
    return (
        <div className="col-lg-6 text-center">
            <h5 className="display-5">Example Two Const Component</h5>
            <div className="lead p-3 m-3">
                <p className="fs-2">props is : {JSON.stringify(props)}</p>
                <p className="fs-2">x is : {props.x}</p>
                <p className="fs-2">y is : {props.y}</p>
                <p className="fs-2">x * y = {props.x * props.y}</p>
                <p className="fs-2">array is : {JSON.stringify(props.arr)}</p>
                <ol className="list-group">
                    {props.arr.map((item, index) => (
                            <li
                                key={index}
                                className={
                                    index == 0 ?
                                        "list-group-item fs-2 bg-warning" :
                                        "list-group-item fs-2"}>
                                {index} : {item}
                            </li>
                        )
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ExampleTwo;