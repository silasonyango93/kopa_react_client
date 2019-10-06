import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";
import { createOwnershipGroup } from "../../../store/modules/admin_home/actions";

class RegisterCompanies extends Component {
  state = {
    companyName: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      CompanyName: this.state.companyName
    };

    this.props.createOwnershipGroup(payload);
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
                  <h3 className="panel-title">Register Companies</h3>
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
                          name="companyName"
                          className="form-control"
                          placeholder="Company Name"
                          value={this.state.companyName}
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

RegisterCompanies.propTypes = {
    createOwnershipGroup: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    createOwnershipGroup: payload =>
    dispatch(createOwnershipGroup(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(RegisterCompanies);
