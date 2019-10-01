import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authenticateUser } from "../../store/modules/current_session/actions";

class Login extends Component {
  state = {
    attemptedEmail: "",
    attemptedPassword: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      attemptedEmail: this.state.attemptedEmail,
      attemptedPassword: this.state.attemptedPassword
    };
    this.props.authenticateUser(payload);
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  authenticateUser: payload => dispatch(authenticateUser(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
