import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import './MainStyle.scss';
import Login from "./views/authentication/Login.jsx";
import AdminHome from "./views/admin_home/AdminHome";
import CompanyOwnerHome from "./views/company_owner_home/CompanyOwnerHome";
import UserHome from "./views/user_home/UserHome";
import ErrorPage from "./components/error_page/ErrorPage";


class App extends Component {
  render() {
    return (
        <div>
          <div className="main-style__error-page">
            <ErrorPage />
          </div>

        <div className="main-style__application-body">
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/admin_home" exact component={AdminHome} />
          <Route path="/company_owner_home" exact component={CompanyOwnerHome} />
          <Route path="/user_home" exact component={UserHome} />
        </div>
      </Router>
        </div>
        </div>
    );
  }
}

export default App;
