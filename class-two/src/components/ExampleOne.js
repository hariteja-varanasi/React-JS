import React, { Component } from 'react';
import Login from "./Login";
import Register from "./Register";

class ExampleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            a: 34,
            b:54,
            isMatch: true
        }
    }

    incrementNum() {
        //this.state.num = this.state.num + 1;
        //state handler
        this.setState({
            num: this.state.num + 1
        })
    }

    toggleView() {
        this.setState({
            isMatch: !this.state.isMatch
        })
    }

    render() {
        return (
            <div className="lead border p-3 my-3">
                <p className="fs-1">State in class component</p>
                <p className="fs-2">Num = { this.state.num }</p>
                <button onClick={() => this.incrementNum()} className="btn btn-outline-primary fs-3">Increment Num by 1</button>

                <hr />

                <p className="fs-1">a = {this.state.a} and b = {this.state.b}</p>
                <p className="fs-2">Sum is {this.state.a + this.state.b}</p>

                <hr />

                <button className="btn btn-outline-primary fs-3" onClick={() => this.toggleView()}>Toggle View</button>
                <button className="btn btn-outline-primary mx-3 fs-3" onClick={this.toggleView.bind(this)}>Toggle View with bind</button>

                <div className="lead border p-3 my-3">
                    {this.state.isMatch ?
                        <Login /> :
                         <Register />
                        }
                </div>
            </div>
        )
    }
}

export default ExampleOne;
