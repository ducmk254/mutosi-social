import "./App.css";
import Home from "./pages/home/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
