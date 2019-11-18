import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {registerAnEmploymentCategory} from "../../../store/modules/company_owner_home/actions";

class RegisterEmploymentCategories extends Component {
  state = {
    employmentCategory: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const payload = {
      CompanyId: this.props.CompanyId,
      CategoryDescription: this.state.employmentCategory
    };

    this.props.registerAnEmploymentCategory(payload);
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
        <div className="container user-login-card">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Company Branches</h3>
                </div>
                <div className="panel-body">
                  <form
                    action=""
                    method="POST"
                    onSubmit={this.handleSubmit}
                    encType="multipart/form-data"
                  >
                    <fieldset>
                      <div className="form-group">
                        <input
                          name="employmentCategory"
                          className="form-control"
                          placeholder="Employment Category"
                          value={this.state.employmentCategory}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>
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
          </div>
        </div>
      </div>
    );
  }
}

RegisterEmploymentCategories.propTypes = {
  registerAnEmploymentCategory: PropTypes.func.isRequired,
  CompanyId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  CompanyId: state.company_owner_home.companyOwnersCompanyDetails.CompanyId
});

const mapDispatchToProps = dispatch => ({
  registerAnEmploymentCategory: payload => dispatch(registerAnEmploymentCategory(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterEmploymentCategories);
