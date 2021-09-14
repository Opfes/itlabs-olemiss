import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./Landing.js";
import Dashboard from "./Dashboard.js";
import './App.css';

function App() {  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
