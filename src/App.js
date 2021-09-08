import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

import {CustomerDetails} from "./pages/customerdetails/CustomerDetailsComponent";
import {CustomersList} from './pages/customerslist/CustomersListComponent';

function App() {
  return (
    <Router>
      <div>
        <div>
          <span><Link to="/">Home</Link></span>        
        </div>
        <div>
          <Switch>
            <Route path="/customerdetails/:customerId" render={(props) => <CustomerDetails {...props.match.params} />} />
            <Route path="/">
              <CustomersList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
