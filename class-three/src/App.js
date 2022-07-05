import logo from './logo.svg';
import './App.css';
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import ExampleFour from "./components/ExampleFour";
import ExampleFive from "./components/ExampleFive";

function App(props) {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row mx-3">
            <h1 className="display-1 text-warning text-center">{props.title}</h1>
            <ExampleOne x={123} y={54} arr={["one", "two", "three"]} />
            <ExampleTwo x={343} y={86} arr={["one", "two", "three"]}/>
        </div>
      <div className="row mx-3 my-5">
          <ExampleThree x={123} y={54} arr={["one", "two", "three"]} />
          <ExampleFour />
          <ExampleFive />
      </div>
      </div>
    </div>
  );
}

export default App;
