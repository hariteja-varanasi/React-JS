import React from 'react';
import ExampleOne from "./ExampleOne";
import PropTypes from "prop-types";
import ExampleFour from "./ExampleFour";

function ExampleFive(props) {
    return (
        <div className="col-lg-6 text-center">
            <h5 className="display-5 text-center">Default Props in a Function Component</h5>
            <div className="lead m-3 p-3">
                <p className="fs-2">a is : {props.a}</p>
                <p className="fs-2">b is : {props.b}</p>
                <p className="fs-2">Title is : {props.title}</p>
                <p className="fs-2">isView is : {props.isView ? "true" : "false"}</p>
                <ol className="list-group">
                    {
                        props.colors.map((item, index) => {
                            return(
                                <li
                                    key={index}
                                    className={
                                        index == 0 ?
                                            "list-group-item fs-2 bg-warning" :
                                            "list-group-item fs-2"
                                    }>{index} : {item}</li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    );
}

//Default Properties with in the component
ExampleFive.defaultProps = {
    a: 34, b: 44,
    title: "Welcome to default props",
    isView: true,
    colors: ['red', 'white', 'blue']
}

//Declare and assign data type to default props
ExampleFive.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number,
    title: PropTypes.string,
    isView: PropTypes.bool,
    colors: PropTypes.array
}

export default ExampleFive;