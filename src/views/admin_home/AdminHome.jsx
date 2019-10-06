import React, { Component } from "react";
import { Columns, Container } from "react-bulma-components";
import AdminSideBar from "../../components/sidebar/AdminSideBar";
import RegisterCompanies from "./register_companies/RegisterCompanies";
import "./AdminHome.scss";
import {
  REGISTER_COMPANIES_FORM,
  REGISTER_COMPANIES_OWNERS_FORM
} from "./AdminHomeConstants";
import RegisterCompanyOwners from "./register_company_owners/RegisterCompanyOwners";

class AdminHome extends Component {
  state = {
    displayRegisterCompaniesForm: true,
    displayRegisterCompanyOwnersForm: false
  };

  handleSideBarClicked = formToDisplay => {
    if (formToDisplay === REGISTER_COMPANIES_FORM) {
      this.setState({
        displayRegisterCompaniesForm: true,
        displayRegisterCompanyOwnersForm: false
      });
    } else if (formToDisplay === REGISTER_COMPANIES_OWNERS_FORM) {
      this.setState({
        displayRegisterCompaniesForm: false,
        displayRegisterCompanyOwnersForm: true
      });
    }
  };

  render() {
    return (
      <div>
        <Columns>
          <Columns.Column size="one-fifth">
            <AdminSideBar handleSideBarClicked={this.handleSideBarClicked} />
          </Columns.Column>

          <Container>
            <div
              className={
                this.state.displayRegisterCompaniesForm ? "show" : "hide"
              }
            >
              <RegisterCompanies />
            </div>
            <div
              className={
                this.state.displayRegisterCompanyOwnersForm ? "show" : "hide"
              }
            >
              <RegisterCompanyOwners />
            </div>
          </Container>
        </Columns>
      </div>
    );
  }
}

export default AdminHome;
