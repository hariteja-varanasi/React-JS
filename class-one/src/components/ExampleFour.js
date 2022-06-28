import React, { Component } from 'react';

const x = 123;
const title = "Welcome to React";

let a = 777;

const colors = ['red', 'white', 'blue'];

class ExampleFour extends Component {

    constructor(props) {
        super(props);
        this.p = 34;
    }

    render() {
        return (
            <div className="lead border p-3 my-3">
                <h1 className="display-1">Variables in class component</h1>
                <p className="fs-1">x = {x}</p>
                <p className="fs-1">a = {a}</p>
                <hr />
                <div className="lead border p-3 my-3">
                    {
                        colors.map((item, index) => {
                            return (
                                <p className="fs-1" key={index}>{index} : {item}</p>
                            )
                        })
                    }
                </div>
                <hr />
                <p className="fs-1">p = {this.p}</p>
            </div>
        )
    }
}

export default ExampleFour;