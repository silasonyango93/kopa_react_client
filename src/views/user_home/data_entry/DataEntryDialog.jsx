import React, { Component } from "react";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./DataEntryDialog.scss";
import PersonalDetails from "./personal_details/PersonalDetails";
import EmploymentDetails from "./employment_details/EmploymentDetails";
import LoanDetails from "./loan_details/LoanDetails";
import {
  addLoanDetails,
  getACompanysPendingLoans,
  toggleModalDisplay
} from "../../../store/modules/user_home/actions";
import Table from "../../../components/table/table_body/Table";

class DataEntryDialog extends Component {
  state = {
    displayPersonalDetails: false,
    displayEmploymentDetails: false,
    displayLoanDetails: false,
    tableData: [],
    tableHeaders: {
      index: "#",
      name: "Name",
      ClientPhoneNumber: "Phone Number",
      ClientEmail: "Email",

      EmploymentStatus: "Employment Status",
      CategoryDescription: "Employment Desc",
      BranchName: "Branch Name",
      LoanAmount: "Loan Amount",
      InterestRate: "Interest Rate(%)",
      RemainingLoanAmount: "Remaining Loan Amount",
      LoanRating: "Star Rating"
    }
  };

  componentDidMount() {
    const payload = {
      companyId: this.props.currentSystemUserCompanyDetails.CompanyId,
      isFullyPaidStatus: "0"
    };
    this.props.getACompanysPendingLoans(payload);
    this.setState({
      displayPersonalDetails: this.props.displayPersonalDetails,
      displayEmploymentDetails: this.props.displayEmploymentDetails,
      displayLoanDetails: this.props.displayLoanDetails
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.displayPersonalDetails !== prevProps.displayPersonalDetails
    ) {
      this.setState({
        displayPersonalDetails: this.props.displayPersonalDetails
      });
    }

    if (
      this.props.displayEmploymentDetails !== prevProps.displayEmploymentDetails
    ) {
      this.setState({
        displayEmploymentDetails: this.props.displayEmploymentDetails
      });
    }

    if (this.props.displayLoanDetails !== prevProps.displayLoanDetails) {
      this.setState({ displayLoanDetails: this.props.displayLoanDetails });
    }

    if (
      this.props.currentCompanyPendingLoans !==
      prevProps.currentCompanyPendingLoans
    ) {
      let pendingLoans;

      pendingLoans = this.props.currentCompanyPendingLoans.map(
        (item, index) => {
          return {
            id: index + 1,
            name:
              item.ClientFirstName +
              " " +
              item.ClientMiddleName +
              " " +
              item.ClientSurname,
            ClientPhoneNumber: item.ClientPhoneNumber,
            ClientEmail: item.ClientEmail,
            EmploymentStatus:
              item.EmploymentStatus === 1 ? "Employed" : "Unemployed",
            CategoryDescription: item.CategoryDescription,
            BranchName: item.BranchName,
            LoanAmount: item.LoanAmount,
            InterestRate: item.InterestRate,
            RemainingLoanAmount: item.RemainingLoanAmount,
            LoanRating: item.LoanRating
          };
        }
      );

      this.setState({ tableData: pendingLoans });
    }
  }

  closeModal = () => {
    this.setState({ visible: false });
  };

  openModal = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <div>
        <div className="col-md-12 dialog__table-div">
          <Table
            tableTitle="Exising Company Customers"
            tableHeaderObject={this.state.tableHeaders}
            tableData={this.state.tableData}
            addIconClicked={() => {
              this.props.toggleModalDisplay(true);
            }}
          />
        </div>
        <Modal
          visible={this.props.visible}
          width={this.props.dialogWidth}
          height={this.props.dialogHeight}
          effect="fadeInUp"
          onClickAway={() => {
            this.props.toggleModalDisplay(false);
          }}
        >
          <div className="success-modal-header">
            <p className="modal-title">Client Registration</p>
          </div>

          <div className={this.state.displayPersonalDetails ? "show" : "hide"}>
            <PersonalDetails />
          </div>
          <div
            className={this.state.displayEmploymentDetails ? "show" : "hide"}
          >
            <EmploymentDetails />
          </div>
          <div className={this.state.displayLoanDetails ? "show" : "hide"}>
            <LoanDetails />
          </div>
        </Modal>
      </div>
    );
  }
}

DataEntryDialog.propTypes = {
  displayPersonalDetails: PropTypes.bool.isRequired,
  displayEmploymentDetails: PropTypes.bool.isRequired,
  displayLoanDetails: PropTypes.bool.isRequired,
  getACompanysPendingLoans: PropTypes.func.isRequired,
  dialogHeight: PropTypes.string.isRequired,
  dialogWidth: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  toggleModalDisplay: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  displayPersonalDetails: state.user_home.displayPersonalDetails,
  displayEmploymentDetails: state.user_home.displayEmploymentDetails,
  displayLoanDetails: state.user_home.displayLoanDetails,
  currentCompanyPendingLoans: state.user_home.currentCompanyPendingLoans,
  currentSystemUserCompanyDetails:
    state.current_session.currentSystemUserCompanyDetails,
  dialogHeight: state.user_home.dialogHeight,
  dialogWidth: state.user_home.dialogWidth,
  visible: state.user_home.visible
});

const mapDispatchToProps = dispatch => ({
  getACompanysPendingLoans: payload =>
    dispatch(getACompanysPendingLoans(payload)),
  toggleModalDisplay: displayModal => dispatch(toggleModalDisplay(displayModal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataEntryDialog);
