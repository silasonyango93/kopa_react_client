import React, { Component } from "react";
import { Columns } from "react-bulma-components/dist";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactDatetime from "react-datetime";
import {
  addLoanDetails,
  submitClientDetails
} from "../../../../store/modules/user_home/actions";

class LoanDetails extends Component {
  state = {
    loanAmount: "",
    interestRate: "",
    remainingLoanAmount: "",
    expectedSettlementDate: "",
    loanAmountHasError: false,
    loanAmountErrorMessage: "",
    interestRateHasError: false,
    interestRateErrorMessage: "",
    remainingLoanAmountHasError: false,
    remainingLoanAmountErrorMessage: "",
    dateHasError: false,
    dateErrorMessage: ""
  };

  handleChange = event => {
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState({
      ...newState
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let dateOfBirth =
      this.state.expectedSettlementDate._d.getFullYear() +
      "-" +
      (this.state.expectedSettlementDate._d.getMonth() + 1) +
      "-" +
      this.state.expectedSettlementDate._d.getDate();

    const payload = {
      ClientId: this.props.currentClientDbRecordId,
      CompanyId: this.props.currentSystemUserCompanyDetails.CompanyId,
      CompanyBranchId: this.props.currentSystemUserCompanyDetails
        .CompanyBranchId,
      SystemUserId: this.props.session_details.SystemUserId,
      LoanAmount: this.state.loanAmount,
      InterestRate: this.state.interestRate,
      ExpectedSettlementDate: dateOfBirth,
      LoanRating: "1",
      IsFullyPaid: "0",
      RemainingLoanAmount: this.state.remainingLoanAmount,
      EmploymentStatus: this.props.currentEmploymentDetails.EmploymentStatus,
      EmploymentCategoryId: this.props.currentEmploymentDetails
        .EmploymentCategoryId,
      Occupation: this.props.currentEmploymentDetails.Occupation,
      EmploymentStation: this.props.currentEmploymentDetails.EmploymentStation
    };

    this.props.addLoanDetails(payload);
  };

  render() {
    return (
      <div>
        <div className="login-panel panel panel-default dialog__main-body">
          <div className="panel-heading">
            <h3 className="panel-title">Loan Details</h3>
          </div>
          <div className="panel-body">
            <form
              action=""
              method="POST"
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
            >
              <fieldset>
                <Columns>
                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="loanAmount"
                        className={
                          this.state.loanAmountHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Loan Amount"
                        value={this.state.loanAmount}
                        type="number"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.loanAmountHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.loanAmountErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>

                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="interestRate"
                        className={
                          this.state.interestRateHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Interest Rate"
                        value={this.state.interestRate}
                        type="number"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.interestRateHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.interestRateErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>
                </Columns>

                <Columns>
                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="remainingLoanAmount"
                        className={
                          this.state.remainingLoanAmountHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Remaining Loan Amount"
                        value={this.state.remainingLoanAmount}
                        type="number"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.remainingLoanAmountHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.remainingLoanAmountErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>

                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <ReactDatetime
                        name="expectedSettlementDate"
                        required={true}
                        value={this.state.expectedSettlementDate}
                        onChange={value =>
                          this.setState({
                            ...this.state,
                            expectedSettlementDate: value
                          })
                        }
                        inputProps={{
                          className: "form-control",
                          placeholder: "Expected Settlement Date"
                        }}
                        timeFormat={false}
                      />
                      <p
                        className={
                          this.state.dateHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.dateErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>
                </Columns>

                <button
                  type="submit"
                  className="btn btn-lg btn-success btn-block"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoanDetails.propTypes = {
  currentEmploymentDetails: PropTypes.shape().isRequired,
  currentSystemUserCompanyDetails: PropTypes.shape().isRequired,
  session_details: PropTypes.shape().isRequired,
  currentClientDbRecordId: PropTypes.string.isRequired,
  addLoanDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentEmploymentDetails: state.user_home.currentEmploymentDetails,
  currentSystemUserCompanyDetails:
    state.current_session.currentSystemUserCompanyDetails,
  session_details: state.current_session.session_details,
  currentClientDbRecordId: state.user_home.currentClientDbRecordId
});

const mapDispatchToProps = dispatch => ({
  addLoanDetails: payload => dispatch(addLoanDetails(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanDetails);
