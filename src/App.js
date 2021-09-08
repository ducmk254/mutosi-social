import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
         <div className="App">
            <Route path="/" component={Home}/>
        </div>
    </Switch>
      
    </BrowserRouter>
      
  );
}

export default App;
