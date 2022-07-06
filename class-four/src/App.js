import React, {Component} from 'react';
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import root from './index';

class App extends Component {
    constructor(props) {
        super(props);
    }

    mount() {
        //alert('mount clicked');
        const rootOne = ReactDOM.createRoot(document.getElementById('renderHere'));
        rootOne.render(
            <React.StrictMode>
                <Counter num={0} />
            </React.StrictMode>
        );
    }

    unMount() {
        //alert('unmount clicked');
        const rootOne = ReactDOM.createRoot(document.getElementById('renderHere'));
        rootOne.unmount();
    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3 className="display-3 text-center">React Lifecycle</h3>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col text-center">
                        <div className="btn-group">
                            <button onClick={this.mount.bind(this)} className="btn btn-outline-success mx-3 fs-3">Mount</button>
                            <button onClick={this.unMount.bind(this)} className="btn btn-outline-warning mx-3 fs-3">UnMount</button>
                        </div>
                    </div>
                </div>
                <div id="renderHere"></div>
            </div>
        );
    }
}

export default App;