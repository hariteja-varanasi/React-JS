import React, {Component} from 'react';

class ExampleThree extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-6 text-center mx">
                <h5 className="display-5">Example Three Class Component</h5>
                <div className="lead p-3 m-3">
                    <p className="fs-2">props is : {JSON.stringify(this.props)}</p>
                    <p className="fs-2">x is : {this.props.x}</p>
                    <p className="fs-2">y is : {this.props.y}</p>
                    <p className="fs-2">x * y = {this.props.x * this.props.y}</p>
                    <p className="fs-2">array is : {JSON.stringify(this.props.arr)}</p>
                    <ol className="list-group">
                        {this.props.arr.map((item, index) => (
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
}

export default ExampleThree;