import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="lead p-3 m-3">
                            <h3 className="display-3 text-warning">Counter</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="display-1">
                            {
                                this.state.view ? "Welcome to React Lifecycle" : "Need More Counts"
                            }
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;