import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='min-h-screen overlflow-hidden bg-indigo-400 relative'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/' component={Dashboard} />
      </Switch>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
