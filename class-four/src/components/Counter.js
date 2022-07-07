import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }

    addOne() {
        //const root = ReactDOM.createRoot(document.getElementById("renderHere"));
        console.log("root is : ", this.props.root);
        this.props.root.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1} root={this.props.root} />
            </React.StrictMode>
        )
    }

    clearCounts() {
        //const root = ReactDOM.createRoot(document.getElementById("renderHere"));
        this.props.root.render(
            <React.StrictMode>
                <Counter num={0} root={this.props.root} />
            </React.StrictMode>
        )
    }

    // componentWillMount() {
    //     console.log("componentWillMount called");
    // }
    //
    // componentDidMount() {
    //     console.log("componentDidMount called");
    // }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps is called");
        console.log("next props : ", nextProps);
        console.log("next content : ", nextContext);
        if(nextProps.num >= 10){
            this.setState({
                view : true
            })
        }
        else{
            this.setState({
                view : false
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate is called");
        console.log("shouldComponentUpdate next props : ", nextProps);
        console.log("shouldComponentUpdate next state : ", nextState);
        console.log("shouldComponentUpdate next context : ", nextContext);
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate is called");
        console.log("componentWillUpdate next props : ", nextProps);
        console.log("componentWillUpdate next state : ", nextState);
        console.log("componentWillUpdate next context : ", nextContext);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate is called");
        console.log("componentDidUpdate prev props : ", prevProps);
        console.log("componentDidUpdate prev state : ", prevState);
        console.log("componentDidUpdate snapshot : ", snapshot);
    }

    render() {
        console.log("render called");
        return (
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <div className="lead p-3 m-3">
                            <h1 className="display-1 text-warning">Counter</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="display-3 text-primary">count = {this.props.num}</h3>
                        <h3 className="display-3">
                            {
                                this.state.view ? "Welcome to React Lifecycle" : "Need More Counts"
                            }
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary fs-3 mx-3" onClick={this.addOne.bind(this)} disabled={this.state.view ? true : false}>Add One</button>
                            <button type="button" className="btn btn-outline-danger fs-3" onClick={this.clearCounts.bind(this)}>Clear Counts</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;