import React, { Component } from 'react';

class ExampleTwo extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        x: 1234,
        y: 343,
        isView: false,
        colors: ['red', 'white', 'blue']
    }

    render() {
        return(
            <div className="container">
                <h1 className="display-1 bg-warning text-wrap">Example 2 State in class component</h1>
                <div className="row">
                    <div className="col">
                        <h4 className="display-5">x = { this.state.x }</h4>
                        <h4 className="display-5">x = { this.state.y }</h4>
                        <h4 className="display-5">isView = { this.state.isView ? 'true' : 'false' }</h4>
                        <ul className="list-group">
                            {
                                this.state.colors.map((item, index) => {
                                    return (
                                        <li key={index} className={index == 0 ? "list-group-item fs-3 active" : "list-group-item fs-3"} >{index} : {item}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
            )
    }
}

export default ExampleTwo;