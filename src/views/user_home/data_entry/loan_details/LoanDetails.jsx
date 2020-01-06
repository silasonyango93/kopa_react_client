import React, { Component } from "react";
import { Columns } from "react-bulma-components/dist";

class LoanDetails extends Component {
  state = {
    loanAmount: "",
    interestRate: "",
    remainingLoanAmount: "",
    loanAmountHasError: false,
    loanAmountErrorMessage: "",
    interestRateHasError: false,
    interestRateErrorMessage: "",
    remainingLoanAmountHasError: false,
    remainingLoanAmountErrorMessage: ""
  };

  handleChange = event => {
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState({
      ...newState
    });
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

                  <Columns.Column size="one-half" />
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

export default LoanDetails;
