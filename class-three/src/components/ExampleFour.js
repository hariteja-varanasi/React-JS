import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ExampleFour extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="col-lg-6 text-center">
                <h5 className="display-5">Default Props in Class Component</h5>
                <div className="lead m-3 p-3">
                    <p className="fs-2">a is : {this.props.a}</p>
                    <p className="fs-2">b is : {this.props.b}</p>
                    <p className="fs-2">Title is : {this.props.title}</p>
                    <p className="fs-2">isView is : {this.props.isView ? "true" : "false"}</p>
                    <ol className="list-group">
                        {
                            this.props.colors.map((item, index) => {
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
}

//Default Properties with in the component
ExampleFour.defaultProps = {
    a: 34, b: 44,
    title: "Welcome to default props",
    isView: true,
    colors: ['red', 'white', 'blue']
}

//Declare and assign data type to default props
ExampleFour.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number,
    title: PropTypes.string,
    isView: PropTypes.bool,
    colors: PropTypes.array
}

export default ExampleFour;