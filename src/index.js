import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
    <div>
    <h1>Hello, World.</h1>
    </div>
  );
  }
}

const mountApp = document.getElementById("app");
ReactDOM.render(<App />, mountApp);