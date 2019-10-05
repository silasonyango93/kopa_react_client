import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {authenticateSystemAdmin, authenticateUser} from "../../store/modules/current_session/actions";
import { FormGroup, Label, Input } from "reactstrap";
class Login extends Component {
  state = {
    attemptedEmail: "",
    attemptedPassword: "",
    isAdmin: false,
    isCompanyOwner: false,
    isStaff: true
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      AttemptedEmail: this.state.attemptedEmail,
      AttemptedPassword: this.state.attemptedPassword
    };

    if(this.state.isAdmin) {
        this.props.authenticateSystemAdmin(payload);
    }

  };

  handleChange = event => {
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState({
      ...newState
    });
  };

    handleAdminRadioClicked = () => {
       if(this.state.isCompanyOwner)
       {
         this.setState({isCompanyOwner: false});
       } else if(this.state.isStaff) {
         this.setState({isStaff: false});
       }
        this.setState({isAdmin: true});
    };

    handleCompanyOwnerRadioClicked = () => {
        if(this.state.isAdmin)
        {
            this.setState({isAdmin: false});
        } else if(this.state.isStaff) {
            this.setState({isStaff: false});
        }
        this.setState({isCompanyOwner: true});
    };

    handleStaffRadioClicked = () => {
        if(this.state.isAdmin)
        {
            this.setState({isAdmin: false});
        } else if(this.state.isCompanyOwner) {
            this.setState({isCompanyOwner: false});
        }
        this.setState({isStaff: true});
    };

  render() {
    return (
      <div>
        <div className="container user-login-card">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Sign In</h3>
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
                          name="attemptedEmail"
                          className="form-control"
                          placeholder="Email"
                          value={this.state.attemptedEmail}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>

                      <div className="form-group">
                        <input
                          name="attemptedPassword"
                          className="form-control"
                          placeholder="Password"
                          value={this.state.attemptedPassword}
                          type="password"
                          onChange={this.handleChange}
                          required={true}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-lg btn-success btn-block"
                      >
                        Sign In
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="radio1"
                    checked={this.state.isAdmin}
                    onClick={this.handleAdminRadioClicked}
                  />{" "}
                  As Admin
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="radio1"
                    checked={this.state.isCompanyOwner}
                    onClick={this.handleCompanyOwnerRadioClicked}
                  />{" "}
                  As Company Owner
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="radio1"
                    checked={this.state.isStaff}
                    onClick={this.handleStaffRadioClicked}
                  />{" "}
                  As Staff
                </Label>
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
    authenticateSystemAdmin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  authenticateUser: payload => dispatch(authenticateUser(payload)),
    authenticateSystemAdmin : payload => dispatch(authenticateSystemAdmin(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
