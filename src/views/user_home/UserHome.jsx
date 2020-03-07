import React, { Component } from "react";
import { Columns, Container } from "react-bulma-components";
import IdleTimer from "react-idle-timer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./UserHome.scss";
import { DEBOUNCE, IDLE_TIMEOUT } from "../../config/constants/Constants";
import { terminateASystemUserSession } from "../../store/modules/current_session/actions";
import TopBar from "../../components/topbar/TopBar";
import {
  getAllCompanies,
  getAllCompanyOwners
} from "../../store/modules/admin_home/actions";
import { DATA_ENTRY_FORM } from "./UserHomeConstants";
import UserSideBar from "../../components/sidebar/UserSideBar";
import DataEntryDialog from "./data_entry/DataEntryDialog";

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDataEntryForm: true
    };
    this.idleTimer = null;
  }

  componentDidMount() {
    if (!this.props.isSessionActive) {
      window.location.assign("/");
    } else {
      window.addEventListener("beforeunload", this.handleTabClosed);
    }
  }

  componentDidUpdate() {
    if (!this.props.isSessionActive) {
      window.location.assign("/");
    }
  }

  componentWillUnmount() {
    const payload = {
      ColumnName: "SessionLogId",
      ColumnValue: this.props.dbSessionLogId
    };
    this.props.terminateASystemUserSession(payload);
  }

  handleTabClosed = () => {
    const payload = {
      ColumnName: "SessionLogId",
      ColumnValue: this.props.dbSessionLogId
    };
    this.props.terminateASystemUserSession(payload);
  };

  handleSideBarClicked = formToDisplay => {
    if (formToDisplay === DATA_ENTRY_FORM) {
      this.setState({
        displayDataEntryForm: true
      });
    }
  };

  onIdle = e => {
    const payload = {
      ColumnName: "SessionLogId",
      ColumnValue: this.props.dbSessionLogId
    };
    this.props.terminateASystemUserSession(payload);
    window.location.assign("/");
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
            <UserSideBar handleSideBarClicked={this.handleSideBarClicked} />
          </Columns.Column>

          <Container>
            <div className={this.state.displayDataEntryForm ? "show" : "hide"}>
              <DataEntryDialog />
            </div>
          </Container>
        </Columns>
      </div>
    );
  }
}

UserHome.propTypes = {
  isSessionActive: PropTypes.bool.isRequired,
  getAllCompanies: PropTypes.func.isRequired,
  getAllCompanyOwners: PropTypes.func.isRequired,
  terminateASystemUserSession: PropTypes.func.isRequired,
  dbSessionLogId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isSessionActive: state.current_session.isSessionActive,
  dbSessionLogId: state.current_session.dbSessionLogId
});

const mapDispatchToProps = dispatch => ({
  terminateASystemUserSession: payload =>
    dispatch(terminateASystemUserSession(payload)),
  getAllCompanies: () => dispatch(getAllCompanies()),
  getAllCompanyOwners: () => dispatch(getAllCompanyOwners())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);
