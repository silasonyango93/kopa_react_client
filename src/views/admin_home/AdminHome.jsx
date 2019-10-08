import React, { Component } from "react";
import { Columns, Container } from "react-bulma-components";
import IdleTimer from "react-idle-timer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminSideBar from "../../components/sidebar/AdminSideBar";
import RegisterCompanies from "./register_companies/RegisterCompanies";
import "./AdminHome.scss";
import {
  REGISTER_COMPANIES_FORM,
  REGISTER_COMPANIES_OWNERS_FORM
} from "./AdminHomeConstants";
import RegisterCompanyOwners from "./register_company_owners/RegisterCompanyOwners";
import { reducer as admin_home } from "../../store/modules/admin_home";
import { reducer as current_session } from "../../store/modules/current_session";
import {DEBOUNCE, IDLE_TIMEOUT} from "../../config/constants/Constants";
import {
    authenticateSystemAdmin,
    authenticateUser,
    terminateCurrentSession
} from "../../store/modules/current_session/actions";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayRegisterCompaniesForm: true,
      displayRegisterCompanyOwnersForm: false
    };
    this.idleTimer = null;
  }

  componentDidMount() {
    if (!this.props.isSessionActive) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (!this.props.isSessionActive) {
      this.props.history.push("/");
    }
  }

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

  onIdle = e => {
    this.props.terminateCurrentSession();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onIdle={this.onIdle}
          debounce={DEBOUNCE}
          timeout={IDLE_TIMEOUT}
        />
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

AdminHome.propTypes = {
  isSessionActive: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isSessionActive: state.current_session.isSessionActive,
    terminateCurrentSession: PropTypes.func.isRequired,
});

const mapDispatchToProps = dispatch => ({
    terminateCurrentSession: () => dispatch(terminateCurrentSession())
});

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(AdminHome);
