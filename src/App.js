import "./App.css";
import Home from "./pages/home/Home";
import { Route } from "react-router-dom";
import Group from "./pages/group/Group";
import Topbar from "./components/Topbar/Topbar";
import Store from "./pages/store/Store";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <div className="App">
      <Topbar />
        <Route path="/" component={Home} exact={true} />
        <Route path="/group" component={Group} exact={true} />
        <Route path="/store" component={Store} exact={true} />

        <Route component={NotFound } />
    </div>
  );
}

export default App;
