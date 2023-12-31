import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;