import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    getAllCompanies
} from "../../../store/modules/admin_home/actions";
import {createCompanyBranch} from "../../../store/modules/company_owner_home/actions";

class RegisterCompanyBranches extends Component {
    state = {
        SelectedCompanyId: "",
        AllCompanies: [],
        branchName: "",
        branchPhysicalAddress: "",
    };

    componentDidMount() {
        this.props.getAllCompanies();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.allRegisteredCompanies !== prevProps.allRegisteredCompanies
        ) {
            let allRegisteredCompanies = this.props.allRegisteredCompanies;
            allRegisteredCompanies = allRegisteredCompanies.map(item => {
                return {
                    label: item.OwnershipGroupName,
                    value: item.CompanyOwnershipGroupId
                };
            });
            this.setState({ AllCompanies: allRegisteredCompanies });
        }
    }

    handleSubmit = event => {
        event.preventDefault();

            const payload = {
                CompanyId: this.state.SelectedCompanyId.value,
                BranchName: this.state.branchName,
                BranchPhysicalAddress: this.state.branchPhysicalAddress
            };

            this.props.createCompanyBranch(payload);

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
                                                <Select
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    placeholder="Company"
                                                    name="SelectedCompanyId"
                                                    closeMenuOnSelect={true}
                                                    value={this.state.SelectedCompanyId}
                                                    onChange={value =>
                                                        this.setState({
                                                            ...this.state,
                                                            SelectedCompanyId: value
                                                        })
                                                    }
                                                    options={this.state.AllCompanies}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="branchName"
                                                    className="form-control"
                                                    placeholder="Branch Name"
                                                    value={this.state.branchName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="branchPhysicalAddress"
                                                    className="form-control"
                                                    placeholder="Branch Physical Address"
                                                    value={this.state.branchPhysicalAddress}
                                                    type="textarea"
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

RegisterCompanyBranches.propTypes = {
    getAllCompanies: PropTypes.func.isRequired,
    createCompanyBranch: PropTypes.func.isRequired,
    allRegisteredCompanies: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    allRegisteredCompanies: state.admin_home.allRegisteredCompanies
});

const mapDispatchToProps = dispatch => ({
    getAllCompanies: () => dispatch(getAllCompanies()),
    createCompanyBranch: payload =>
        dispatch(createCompanyBranch(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterCompanyBranches);
