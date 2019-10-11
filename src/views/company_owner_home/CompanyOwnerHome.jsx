import React, { Component } from "react";
import { Columns, Container } from "react-bulma-components";
import IdleTimer from "react-idle-timer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./CompanyOwnerHome.scss";
import { DEBOUNCE, IDLE_TIMEOUT } from "../../config/constants/Constants";
import {
  terminateCurrentSession
} from "../../store/modules/current_session/actions";
import TopBar from "../../components/topbar/TopBar";
import CompanyOwnerSideBar from "../../components/sidebar/CompanyOwnerSideBar";
import RegisterCompanyBranches from "./register_company_branches/RegisterCompanyBranches";
import {REGISTER_COMPANY_BRANCHES_FORM} from "./CompanyOwnerHomeConstants";

class CompanyOwnerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayRegisterCompanyBranchesForm: true
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
    if (formToDisplay === REGISTER_COMPANY_BRANCHES_FORM) {
      this.setState({
          displayRegisterCompanyBranchesForm: true
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
        <TopBar />
        <Columns>
          <Columns.Column size="one-fifth">
            <CompanyOwnerSideBar handleSideBarClicked={this.handleSideBarClicked} />
          </Columns.Column>

          <Container>
            <div
              className={
                this.state.displayRegisterCompanyBranchesForm ? "show" : "hide"
              }
            >
              <RegisterCompanyBranches />
            </div>
          </Container>
        </Columns>
      </div>
    );
  }
}

CompanyOwnerHome.propTypes = {
  isSessionActive: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isSessionActive: state.current_session.isSessionActive,
  terminateCurrentSession: PropTypes.func.isRequired
});

const mapDispatchToProps = dispatch => ({
  terminateCurrentSession: () => dispatch(terminateCurrentSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyOwnerHome);
