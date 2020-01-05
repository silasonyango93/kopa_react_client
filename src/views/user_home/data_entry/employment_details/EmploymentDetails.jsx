import React, {Component} from 'react';
import {Columns} from "react-bulma-components/dist";
import Select from "react-select";
import ReactDatetime from "react-datetime";

class EmploymentDetails extends Component {
    state = {
        selectedEmploymentStatusObject: {},
        selectedEmploymentCategoryObject: {},
        occupation: '',
        employmentStation: '',
        employmentStatusHasError: false,
        employmentStatusErrorMessage: '',
        employmentCategoryHasError: false,
        employmentCategoryErrorMessage: '',
        occupationHasError: false,
        occupationErrorMessage: '',
        employmentStationHasError: false,
        employmentStationErrorMessage: '',
        employmentStatusCategories: [
            { label: "Employed", value: "1" },
            { label: "Unemployed", value: "0" }
        ],
    };
    render() {
        return (
            <div>
                <div className="login-panel panel panel-default dialog__main-body">
                    <div className="panel-heading">
                        <h3 className="panel-title">Employment Details</h3>
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
                                            <div className="form-group">
                                                <Select
                                                    className={this.state.employmentStatusHasError
                                                        ? 'react-select personal__text-area-error'
                                                        : 'react-select'}
                                                    classNamePrefix="react-select"
                                                    placeholder="Gender"
                                                    name="SelectedGenderId"
                                                    closeMenuOnSelect={true}
                                                    value={this.state.selectedEmploymentStatusObject}
                                                    onChange={value =>
                                                        this.setState({
                                                            ...this.state,
                                                            selectedEmploymentStatusObject: value
                                                        })
                                                    }
                                                    options={this.state.employmentStatusCategories}
                                                />
                                                <p
                                                    className={
                                                        this.state.employmentStatusHasError
                                                            ? 'personal__submision-error'
                                                            : 'personal__hide'
                                                    }
                                                >
                                                    {this.state.employmentStatusErrorMessage}
                                                </p>
                                            </div>
                                        </div>
                                    </Columns.Column>

                                    <Columns.Column size="one-half">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <Select
                                                    className={this.state.employmentCategoryHasError
                                                        ? 'react-select personal__text-area-error'
                                                        : 'react-select'}
                                                    classNamePrefix="react-select"
                                                    placeholder="Gender"
                                                    name="SelectedGenderId"
                                                    closeMenuOnSelect={true}
                                                    value={this.state.selectedEmploymentCategoryObject}
                                                    onChange={value =>
                                                        this.setState({
                                                            ...this.state,
                                                            selectedEmploymentCategoryObject: value
                                                        })
                                                    }
                                                    options={this.state.genderCategories}
                                                />
                                                <p
                                                    className={
                                                        this.state.employmentCategoryHasError
                                                            ? 'personal__submision-error'
                                                            : 'personal__hide'
                                                    }
                                                >
                                                    {this.state.employmentCategoryErrorMessage}
                                                </p>
                                            </div>
                                        </div>
                                    </Columns.Column>
                                </Columns>


                                <Columns>
                                    <Columns.Column size="one-half">
                                        <div className="form-group">
                                            <input
                                                name="occupation"
                                                className={this.state.occupationHasError
                                                    ? 'form-control personal__text-area-error'
                                                    : 'form-control'}
                                                placeholder="Phone Number"
                                                value={this.state.occupation}
                                                type="text"
                                                onChange={this.handleChange}
                                                autoFocus
                                                required={true}
                                            />
                                            <p
                                                className={
                                                    this.state.occupationHasError
                                                        ? 'personal__submision-error'
                                                        : 'personal__hide'
                                                }
                                            >
                                                {this.state.occupationErrorMessage}
                                            </p>
                                        </div>
                                    </Columns.Column>

                                    <Columns.Column size="one-half">
                                        <div className="form-group">
                                            <input
                                                name="employmentStation"
                                                className={this.state.employmentStationHasError
                                                    ? 'form-control personal__text-area-error'
                                                    : 'form-control'}
                                                placeholder="Email"
                                                value={this.state.employmentStation}
                                                type="text"
                                                onChange={this.handleChange}
                                                autoFocus
                                                required={true}
                                            />
                                            <p
                                                className={
                                                    this.state.employmentStationHasError
                                                        ? 'personal__submision-error'
                                                        : 'personal__hide'
                                                }
                                            >
                                                {this.state.employmentStationErrorMessage}
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

export default EmploymentDetails;
