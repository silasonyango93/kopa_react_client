import React, { Component } from "react";
import { Columns, Container } from "react-bulma-components";
import IdleTimer from "react-idle-timer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "react-awesome-modal";
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
import PersonalDetails from "./data_entry/personal_details/PersonalDetails";
import EmploymentDetails from "./data_entry/employment_details/EmploymentDetails";
import LoanDetails from "./data_entry/loan_details/LoanDetails";
import RecyclerCard from "../../components/recyclerview/recycler-card/RecyclerCard";
import { resetUpdatedSearchResultsAvailable } from "../../store/modules/user_home/actions";

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDataEntryForm: true,
      recyclerViewJsx: ""
    };
    this.idleTimer = null;
  }

  componentDidMount() {
    if (!this.props.isSessionActive) {
      window.location.assign("/");
    } else {
      window.addEventListener("beforeunload", this.handleTabClosed);
    }

    if (
      this.props.genericSearchResults &&
      this.props.genericSearchResults.length
    ) {
      let recyclerViewArray = [];

      for (let i = 0; i < this.props.genericSearchResults.length; i++) {
        let clientName =
          this.props.genericSearchResults[i].ClientFirstName +
          " " +
          this.props.genericSearchResults[i].ClientMiddleName +
          " " +
          this.props.genericSearchResults[i].ClientSurname;
        recyclerViewArray.push(
          <RecyclerCard
            clientDetails={this.props.genericSearchResults[i]}
            clientName={clientName}
            clientPhoneNumber={
              this.props.genericSearchResults[i].ClientPhoneNumber
            }
            imageId={this.props.genericSearchResults[i].ClientProfilePicName}
          />
        );
      }

      this.setState({ recyclerViewJsx: recyclerViewArray });
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isSessionActive) {
      window.location.assign("/");
    }

    if (this.props.genericSearchResults !== prevProps.genericSearchResults) {
      if (
        this.props.genericSearchResults &&
        this.props.genericSearchResults.length
      ) {
        let recyclerViewArray = [];

        for (let i = 0; i < this.props.genericSearchResults.length; i++) {
          let clientName =
            this.props.genericSearchResults[i].ClientFirstName +
            " " +
            this.props.genericSearchResults[i].ClientMiddleName +
            " " +
            this.props.genericSearchResults[i].ClientSurname;
          recyclerViewArray.push(
            <RecyclerCard
              clientDetails={this.props.genericSearchResults[i]}
              clientName={clientName}
              clientPhoneNumber={
                this.props.genericSearchResults[i].ClientPhoneNumber
              }
              imageId={this.props.genericSearchResults[i].ClientProfilePicName}
            />
          );
        }

        this.setState({ recyclerViewJsx: recyclerViewArray });
      }
    }
  }

  componentWillUnmount() {
    const payload = {
      ColumnName: "SessionLogId",
      ColumnValue: this.props.dbSessionLogId
    };
    this.props.terminateASystemUserSession(payload);
  }

  handleModalCloseIconClicked = () => {
    this.props.resetUpdatedSearchResultsAvailable();
  };

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

        <Modal
          visible={this.props.isUpdatedSearchResultsAvailable}
          width="581"
          height="360"
          effect="fadeInUp"
        >
          <i
            className="fa fa-close fa-fw close-icon"
            onClick={() => {
              this.handleModalCloseIconClicked();
            }}
          />
          <div className="recycler-modal">{this.state.recyclerViewJsx}</div>
        </Modal>
      </div>
    );
  }
}

UserHome.propTypes = {
  isSessionActive: PropTypes.bool.isRequired,
  getAllCompanies: PropTypes.func.isRequired,
  getAllCompanyOwners: PropTypes.func.isRequired,
  terminateASystemUserSession: PropTypes.func.isRequired,
  dbSessionLogId: PropTypes.string.isRequired,
  genericSearchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  resetUpdatedSearchResultsAvailable: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isSessionActive: state.current_session.isSessionActive,
  dbSessionLogId: state.current_session.dbSessionLogId,
  isUpdatedSearchResultsAvailable:
    state.user_home.isUpdatedSearchResultsAvailable,
  genericSearchResults: state.user_home.genericSearchResults
});

const mapDispatchToProps = dispatch => ({
  terminateASystemUserSession: payload =>
    dispatch(terminateASystemUserSession(payload)),
  getAllCompanies: () => dispatch(getAllCompanies()),
  getAllCompanyOwners: () => dispatch(getAllCompanyOwners()),
  resetUpdatedSearchResultsAvailable: () =>
    dispatch(resetUpdatedSearchResultsAvailable())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);
