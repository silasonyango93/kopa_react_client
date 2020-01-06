import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import './DataEntryDialog.scss';
import PersonalDetails from "./personal_details/PersonalDetails";
import EmploymentDetails from "./employment_details/EmploymentDetails";
import LoanDetails from "./loan_details/LoanDetails";

class DataEntryDialog extends Component {
    state = {visible: true, displayPersonalDetails: true, displayEmploymentDetails: false, displayLoanDetails: false};

    componentDidUpdate(prevProps) {
        if(this.props.displayPersonalDetails !== prevProps.displayPersonalDetails) {
            this.setState({displayPersonalDetails: this.props.displayPersonalDetails});
        }

        if(this.props.displayEmploymentDetails !== prevProps.displayEmploymentDetails) {
            this.setState({displayEmploymentDetails: this.props.displayEmploymentDetails});
        }

        if(this.props.displayLoanDetails !== prevProps.displayLoanDetails) {
            this.setState({displayLoanDetails: this.props.displayLoanDetails});
        }
    }

    closeModal = () => {
        this.setState({visible: false});
    };

    openModal = () => {
        this.setState({visible: true});
    };

    render() {
        return (
            <div>
                <Modal visible={this.state.visible} width="600" height="630" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="success-modal-header">
                        <p className="modal-title">Client Registration</p>
                    </div>

                    <div className={this.state.displayPersonalDetails ? 'show' : 'hide'}>
                        <PersonalDetails />
                    </div>
                    <div className={this.state.displayEmploymentDetails ? 'show' : 'hide'}>
                        <EmploymentDetails />
                    </div>
                    <div className={this.state.displayLoanDetails ? 'show' : 'hide'}>
                        <LoanDetails />
                    </div>

                </Modal>
            </div>
        );
    }
}

DataEntryDialog.propTypes = {
    displayPersonalDetails: PropTypes.bool.isRequired,
    displayEmploymentDetails: PropTypes.bool.isRequired,
    displayLoanDetails: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    displayPersonalDetails: state.user_home.displayPersonalDetails,
    displayEmploymentDetails: state.user_home.displayEmploymentDetails,
    displayLoanDetails: state.user_home.displayLoanDetails
});

export default connect(
    mapStateToProps,
    null
)(DataEntryDialog);
