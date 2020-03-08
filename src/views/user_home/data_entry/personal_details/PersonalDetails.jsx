import React, { Component } from "react";
import ReactDatetime from "react-datetime";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ReactDatePicker.css";
import { Columns } from "react-bulma-components/dist";
import Select from "react-select";
import "./PersonalDetails.scss";
import ip from "../../../../config/EndPoint";
import {registerCustomerAdmission, submitClientDetails} from "../../../../store/modules/user_home/actions";

class PersonalDetails extends Component {
  state = {
    firstName: "",
    middleName: "",
    surname: "",
    nationalId: "",
    SelectedGenderId: "",
    genderCategories: [
      { label: "Male", value: "1" },
      { label: "Female", value: "2" }
    ],
    dateOfBirth: "",
    phoneNumber: "",
    physicalAddress: "",
    email: "",
    image: null,
    profilePicDbName: "",
    firstNameHasError: false,
    firstNameErrorMessage: "",
    middleNameHasError: false,
    middleNameErrorMessage: "",
    surnameHasError: false,
    surnameErrorMessage: "",
    nationalIdHasError: false,
    nationalIdErrorMessage: "",
    SelectedGenderIdHasError: false,
    SelectedGenderIdErrorMessage: "",
    dateOfBirthHasError: false,
    dateOfBirthErrorMessage: "",
    phoneNumberHasError: false,
    phoneNumberErrorMessage: "",
    emailHasError: false,
    emailErrorMessage: "",
    formSubmissionError: false,
    physicalAddressHasError: false,
    physicalAddressErrorMessage: ""
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.profilePicDbName !== prevState.profilePicDbName) {
      if(this.state.profilePicDbName) {
        let dateOfBirth =
            this.state.dateOfBirth._d.getFullYear() +
            "-" +
            (this.state.dateOfBirth._d.getMonth() + 1) +
            "-" +
            this.state.dateOfBirth._d.getDate();

        const payload = {
          ClientUniqueId: this.generateUUID(),
          ClientFirstName: this.state.firstName,
          ClientMiddleName: this.state.middleName,
          ClientSurname: this.state.surname,
          ClientNationalId: this.state.nationalId,
          ClientProfilePicName: this.state.profilePicDbName,
          GenderId: this.state.SelectedGenderId.value,
          ClientDOB: dateOfBirth,
          ClientPhoneNumber: this.state.phoneNumber,
          ClientPhysicalAddress: this.state.physicalAddress,
          ClientEmail: this.state.email,
          EmploymentStatus: "0",
          EmploymentCategoryId: "1",
          Occupation: "NA",
          EmploymentStation: "NA"
        };

        this.props.submitClientDetails(payload);

      }
    }


    if(this.props.currentClientDbRecordId !== prevProps.currentClientDbRecordId) {

      if(this.props.currentClientDbRecordId) {
        const payload = {
          SessionLogId: this.props.dbSessionLogId,
          ClientId: this.props.currentClientDbRecordId
        };

        this.props.registerCustomerAdmission(payload);
        this.resetFormValues();
      }

    }
  }

  resetFormValues = () =>{
    this.setState({
      firstName: "",
      middleName: "",
      surname: "",
      nationalId: "",
      SelectedGenderId: "",
      dateOfBirth: "",
      phoneNumber: "",
      physicalAddress: "",
      email: "",
      image: null,
      profilePicDbName: "",
      firstNameHasError: false,
      firstNameErrorMessage: "",
      middleNameHasError: false,
      middleNameErrorMessage: "",
      surnameHasError: false,
      surnameErrorMessage: "",
      nationalIdHasError: false,
      nationalIdErrorMessage: "",
      SelectedGenderIdHasError: false,
      SelectedGenderIdErrorMessage: "",
      dateOfBirthHasError: false,
      dateOfBirthErrorMessage: "",
      phoneNumberHasError: false,
      phoneNumberErrorMessage: "",
      emailHasError: false,
      emailErrorMessage: "",
      formSubmissionError: false,
      physicalAddressHasError: false,
      physicalAddressErrorMessage: ""
    });
  };

  generateUUID = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  handleChange = event => {
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState({
      ...newState
    });
  };

  handleImageChange = e => {
    this.setState({
      image: e.target.files[0]
    });
  };

  containsANumber = input => {
    return /\d/.test(input);
  };

  submitClientDetailsWithoutImageUpload = event => {
    event.preventDefault();
    let dateOfBirth =
      this.state.dateOfBirth._d.getFullYear() +
      "-" +
      (this.state.dateOfBirth._d.getMonth() + 1) +
      "-" +
      this.state.dateOfBirth._d.getDate();

    const payload = {
      ClientUniqueId: this.generateUUID(),
      ClientFirstName: this.state.firstName,
      ClientMiddleName: this.state.middleName,
      ClientSurname: this.state.surname,
      ClientNationalId: this.state.nationalId,
      ClientProfilePicName: "2694b80c7b5150878d7160b08b5a8538",
      GenderId: this.state.SelectedGenderId.value,
      ClientDOB: dateOfBirth,
      ClientPhoneNumber: this.state.phoneNumber,
      ClientPhysicalAddress: this.state.physicalAddress,
      ClientEmail: this.state.email,
      EmploymentStatus: "0",
      EmploymentCategoryId: "1",
      Occupation: "NA",
      EmploymentStation: "NA"
    };

    this.props.submitClientDetails(payload);
  };

  handleImageSubmit = e => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("file", this.state.image, this.state.image.name);
    let url = ip + "/upload_images";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => {
        this.setState({ profilePicDbName: res.data });
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      firstNameHasError: false,
      surnameHasError: false,
      middleNameHasError: false,
      phoneNumberHasError: false
    });
    if (this.containsANumber(this.state.firstName)) {
      this.setState({
        firstNameHasError: true,
        firstNameErrorMessage: "Name must not contain a number"
      });
    } else if (this.containsANumber(this.state.surname)) {
      this.setState({
        surnameHasError: true,
        surnameErrorMessage: "Name must not contain a number"
      });
    } else if (this.containsANumber(this.state.middleName)) {
      this.setState({
        middleNameHasError: true,
        middleNameErrorMessage: "Name must not contain a number"
      });
    } else if (isNaN(this.state.phoneNumber)) {
      this.setState({
        phoneNumberHasError: true,
        phoneNumberErrorMessage: "Phone number must not contain a letter"
      });
    } else {
      if (this.state.image) {
        this.handleImageSubmit(event);
      } else {
        this.submitClientDetailsWithoutImageUpload(event);
      }
    }
  };

  render() {
    return (
      <div>
        <div className="login-panel panel panel-default dialog__main-body">
          <div className="panel-heading">
            <h3 className="panel-title">Personal Details</h3>
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
                        name="firstName"
                        className={
                          this.state.firstNameHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="First Name"
                        value={this.state.firstName}
                        type="text"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.firstNameHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.firstNameErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>

                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="middleName"
                        className={
                          this.state.middleNameHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Middle Name"
                        value={this.state.middleName}
                        type="text"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.middleNameHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.middleNameErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>
                </Columns>

                <Columns>
                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="surname"
                        className={
                          this.state.surnameHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Surname"
                        value={this.state.surname}
                        type="text"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.surnameHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.surnameErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>

                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <div className="form-group">
                        <Select
                          className={
                            this.state.SelectedGenderIdHasError
                              ? "react-select personal__text-area-error"
                              : "react-select"
                          }
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
                        <p
                          className={
                            this.state.SelectedGenderIdHasError
                              ? "personal__submision-error"
                              : "personal__hide"
                          }
                        >
                          {this.state.SelectedGenderIdErrorMessage}
                        </p>
                      </div>
                    </div>
                  </Columns.Column>
                </Columns>

                <Columns>
                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <ReactDatetime
                        name="dateOfBirth"
                        value={this.state.dateOfBirth}
                        onChange={value =>
                          this.setState({
                            ...this.state,
                            dateOfBirth: value
                          })
                        }
                        inputProps={{
                          className: "form-control",
                          placeholder: "Date Of Birth"
                        }}
                        timeFormat={false}
                      />
                      <p
                        className={
                          this.state.dateOfBirthHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.dateOfBirthErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>

                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="nationalId"
                        className={
                          this.state.nationalIdHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="National ID"
                        value={this.state.nationalId}
                        type="text"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.nationalIdHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.nationalIdErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>
                </Columns>

                <Columns>
                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="phoneNumber"
                        className={
                          this.state.phoneNumberHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Phone Number"
                        value={this.state.phoneNumber}
                        type="text"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.phoneNumberHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.phoneNumberErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>

                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="email"
                        className={
                          this.state.emailHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Email"
                        value={this.state.email}
                        type="text"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.emailHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.emailErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>
                </Columns>

                <Columns>
                  <Columns.Column size="one-half">
                    <div className="form-group">
                      <input
                        name="physicalAddress"
                        className={
                          this.state.physicalAddressHasError
                            ? "form-control personal__text-area-error"
                            : "form-control"
                        }
                        placeholder="Physical Address"
                        value={this.state.physicalAddress}
                        type="text"
                        onChange={this.handleChange}
                        autoFocus
                        required={true}
                      />
                      <p
                        className={
                          this.state.physicalAddressHasError
                            ? "personal__submision-error"
                            : "personal__hide"
                        }
                      >
                        {this.state.physicalAddressErrorMessage}
                      </p>
                    </div>
                  </Columns.Column>

                  <Columns.Column size="one-half" />
                </Columns>

                <div className="form-group">
                  <input
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"
                    onChange={this.handleImageChange}
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
    );
  }
}

PersonalDetails.propTypes = {
  submitClientDetails: PropTypes.func.isRequired,
  currentClientDbRecordId: PropTypes.string.isRequired,
  dbSessionLogId: PropTypes.string.isRequired,
  registerCustomerAdmission: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentClientDbRecordId: state.user_home.currentClientDbRecordId,
  dbSessionLogId: state.current_session.dbSessionLogId
});

const mapDispatchToProps = dispatch => ({
  submitClientDetails: payload => dispatch(submitClientDetails(payload)),
  registerCustomerAdmission: payload => dispatch(registerCustomerAdmission(payload))
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(PersonalDetails);
