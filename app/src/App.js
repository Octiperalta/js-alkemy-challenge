import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className='min-h-screen overlflow-hidden bg-indigo-400 relative'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute path='/' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
