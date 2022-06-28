//library imports
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import ExampleFour from "./components/ExampleFour";
import ExampleFive from "./components/ExampleFive";
import ExampleSix from "./components/ExampleSix";

function App() {
  return (
    <div className="App">
        {/* jsx body */}
        <div className="container">
            <h1 className="display-1">Welcome to React</h1>
            <div className="row">
                <div className="col">
                    {/*<ExampleOne />*/}
                    {/*<ExampleTwo />*/}
                    {/*<ExampleThree />*/}
                    {/*<ExampleFour />*/}
                    {/*<ExampleFive />*/}
                    <ExampleSix />
                </div>
            </div>
        </div>
    </div>
  );
}

//component export
export default App;
