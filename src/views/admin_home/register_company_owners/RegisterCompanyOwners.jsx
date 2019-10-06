import React, { Component } from "react";
import Select from "react-select";
import { FormGroup, Input, Label } from "reactstrap";

class RegisterCompanyOwners extends Component {
  state = {
    firstName: "",
    middleName: "",
    surname: "",
    nationalId: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    SelectedGenderId: "",
    genderCategories: [
      { label: "Male", value: "1" },
      { label: "Female", value: "2" }
    ]
  };

  handleSubmit = event => {
    event.preventDefault();
    /*const payload = {
            AttemptedEmail: this.state.attemptedEmail,
            AttemptedPassword: this.state.attemptedPassword
        };

        if(this.state.isAdmin) {
            this.props.authenticateSystemAdmin(payload);
        }*/
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
                  <h3 className="panel-title">Register Company Owners</h3>
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
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={this.state.firstName}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="middleName"
                          className="form-control"
                          placeholder="Middle Name"
                          value={this.state.middleName}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="surname"
                          className="form-control"
                          placeholder="Surname"
                          value={this.state.surname}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <Select
                          className="react-select"
                          classNamePrefix="react-select"
                          placeholder="Gender"
                          name="SelectedGenderId"
                          closeMenuOnSelect={true}
                          value={this.state.SelectedGenderId}
                          onChange={value =>
                            this.setState({
                              ...this.state,
                              SelectedGenderId: value
                            })
                          }
                          options={this.state.genderCategories}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="nationalId"
                          className="form-control"
                          placeholder="National ID"
                          value={this.state.nationalId}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="phoneNumber"
                          className="form-control"
                          placeholder="Phone Number"
                          value={this.state.phoneNumber}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={this.state.email}
                          type="text"
                          onChange={this.handleChange}
                          autoFocus
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          className="form-control"
                          placeholder="Company Name"
                          value={this.state.password}
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

export default RegisterCompanyOwners;
