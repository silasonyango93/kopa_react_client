import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import Login from "./views/authentication/Login.jsx";
import AdminHome from "./views/admin_home/AdminHome";
import CompanyOwnerHome from "./views/company_owner_home/CompanyOwnerHome";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/admin_home" exact component={AdminHome} />
            <Route path="/company_owner_home" exact component={CompanyOwnerHome} />
        </div>
      </Router>
    );
  }
}

export default App;
