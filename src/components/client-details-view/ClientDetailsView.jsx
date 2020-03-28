import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ClientDetailsView.scss";
import Table from "../table/table_body/Table";
import RecyclerCard from "../recyclerview/recycler-card/RecyclerCard";

class ClientDetailsView extends Component {
  state = {
    tableData: [],
    tableHeaders: {
      index: "#",
      name: "Company Name",
      Amount: "Amount",
      isSettled: "is paid"
    }
  };

  componentDidMount() {
    if (this.props.isUpdatedClientsLoansAvailable) {
      if (this.props.clientsLoans && this.props.clientsLoans.length) {
        let clientLoans;

        clientLoans = this.props.clientsLoans.map((item, index) => {
          let isFullyPaid = "";

          if (item.IsFullyPaid) {
            isFullyPaid = "Yes";
          } else if (!item.IsFullyPaid) {
            isFullyPaid = "Pending";
          } else if (item.IsFullyPaid === 999) {
            isFullyPaid = "Bad Debt";
          }

          return {
            id: index + 1,
            CompanyName: item.CompanyName,
            Amount: item.LoanAmount,
            isSettled: isFullyPaid
          };
        });

        this.setState({ tableData: clientLoans });
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.isUpdatedClientsLoansAvailable !==
      prevProps.isUpdatedClientsLoansAvailable
    ) {
      if (this.props.isUpdatedClientsLoansAvailable) {
        if (this.props.clientsLoans && this.props.clientsLoans.length) {
          let clientLoans;

          clientLoans = this.props.clientsLoans.map((item, index) => {
            let isFullyPaid = "";

            if (item.IsFullyPaid === 1) {
              isFullyPaid = "Yes";
            } else if (item.IsFullyPaid === 0) {
              isFullyPaid = "Pending";
            } else if (item.IsFullyPaid === 999) {
              isFullyPaid = "Bad Debt";
            }

            return {
              id: index + 1,
              CompanyName: item.CompanyName,
              Amount: item.LoanAmount,
              isSettled: isFullyPaid
            };
          });

          this.setState({ tableData: clientLoans });
        }
      }
    }
  }

  render() {
    const { clientDetails } = this.props;

    return (
      <div className="details__main-body">
        <div className="details__profile-card">
          <img
            className="details__profpic-div"
            src={
              "http://backend.kopa.kopa.xyz/web_display_image?imageID=" +
              clientDetails.ClientProfilePicName
            }
          />
          <div className="details__details-div">
            <p className="details__profile-title">Client Profile</p>
            <div className="details__first-row">
              <div className="details__name-column">
                <div>
                  {clientDetails.ClientFirstName +
                    " " +
                    clientDetails.ClientSurname}
                </div>
                <div className="details__name-stroke" />
              </div>
              <div className="details__number-column">
                <div>{clientDetails.ClientPhoneNumber}</div>
                <div className="details__name-stroke" />
              </div>
            </div>

            <div className="details__email-div">
              {clientDetails.ClientDOB.substring(0, 10) + " (DOB)"}
            </div>
            <div className="details__name-stroke" />

            <div className="details__dob-div">{clientDetails.ClientEmail}</div>
            <div className="details__name-stroke" />

            <div className="details__belly-div">
              <div className="details__belly" />
            </div>
          </div>
        </div>

        <div className="details__more-details-div">
          <div className="details__employment-details-card">
            <div className="details__employment-title">Employment Details</div>
            <div className="details__name-stroke" />

            <div className="details__employment-first-row details__top-row">
              <div className="details__career-title">Career</div>
              <div className="details__career-pill">
                {clientDetails.Occupation}
              </div>
            </div>

            <div className="details__employment-first-row">
              <div className="details__career-title">Station</div>
              <div className="details__career-pill">
                {clientDetails.EmploymentStation}
              </div>
            </div>
          </div>

          <div className="details__table-card">
            <Table
              tableTitle="Client' Loans"
              tableHeaderObject={this.state.tableHeaders}
              tableData={this.state.tableData}
            />
          </div>
        </div>
      </div>
    );
  }
}

ClientDetailsView.propTypes = {
  clientDetails: PropTypes.shape().isRequired,
  clientsLoans: PropTypes.arrayOf(PropTypes.object).isRequired,
  isUpdatedClientsLoansAvailable: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  clientsLoans: state.user_home.clientsLoans,
  isUpdatedClientsLoansAvailable: state.user_home.isUpdatedClientsLoansAvailable
});

export default connect(
  mapStateToProps,
  null
)(ClientDetailsView);
