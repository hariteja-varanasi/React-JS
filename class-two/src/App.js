import logo from './logo.svg';
import './App.css';
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import ExampleFour from "./components/ExampleFour";
import ExampleFive from "./components/ExampleFive";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-1">React State Component</h1>
                    {/*<ExampleOne />*/}
                    {/*<ExampleTwo />*/}
                    {/*<ExampleThree />*/}
                    {/*<ExampleFour />*/}
                    <ExampleFive />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
