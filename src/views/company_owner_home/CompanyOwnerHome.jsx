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
import {getACompanysBranches, getCompanyOwnersCompanyDetails} from "../../store/modules/company_owner_home/actions";

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
    } else {
      const paload = {
        companyOwnerId: this.props.companyOwnerId
      }
      this.props.getCompanyOwnersCompanyDetails(paload);
    }
  }

  componentDidUpdate() {
    if (!this.props.isSessionActive) {
      this.props.history.push("/");
    }
  }

  handleSideBarClicked = formToDisplay => {
    if (formToDisplay === REGISTER_COMPANY_BRANCHES_FORM) {
      const paload = {
        companyOwnerId: this.props.companyOwnerId
      }
      this.props.getCompanyOwnersCompanyDetails(paload);
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
  isSessionActive: PropTypes.bool.isRequired,
  terminateCurrentSession: PropTypes.func.isRequired,
  getCompanyOwnersCompanyDetails: PropTypes.func.isRequired,
  companyOwnerId: PropTypes.string.isRequired,
  getACompanysBranches: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  companyOwnerId: state.current_session.session_details.CompanyOwnerId,
  isSessionActive: state.current_session.isSessionActive
});

const mapDispatchToProps = dispatch => ({
  terminateCurrentSession: () => dispatch(terminateCurrentSession()),
  getACompanysBranches: (payload) => dispatch(getACompanysBranches(payload)),
  getCompanyOwnersCompanyDetails: (payload) => dispatch(getCompanyOwnersCompanyDetails(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyOwnerHome);
