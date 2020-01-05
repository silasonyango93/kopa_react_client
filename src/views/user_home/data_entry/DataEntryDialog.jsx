import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import './DataEntryDialog.scss';
import PersonalDetails from "./personal_details/PersonalDetails";
import EmploymentDetails from "./employment_details/EmploymentDetails";

class DataEntryDialog extends Component {
    state = {visible: true, displayPersonalDetails: true, displayEmploymentDetails: false};

    componentDidUpdate(prevProps) {
        if(this.props.displayPersonalDetails !== prevProps.displayPersonalDetails) {
            this.setState({displayPersonalDetails: this.props.displayPersonalDetails});
        }

        if(this.props.displayEmploymentDetails !== prevProps.displayEmploymentDetails) {
            this.setState({displayEmploymentDetails: this.props.displayEmploymentDetails});
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
                        <p className="modal-title">Data Entry</p>
                    </div>

                    <div className={this.state.displayPersonalDetails ? 'show' : 'hide'}>
                        <PersonalDetails />
                    </div>
                    <div className={this.state.displayEmploymentDetails ? 'show' : 'hide'}>
                        <EmploymentDetails />
                    </div>

                </Modal>
            </div>
        );
    }
}

DataEntryDialog.propTypes = {
    displayPersonalDetails: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    displayPersonalDetails: state.user_home.displayPersonalDetails,
    displayEmploymentDetails: state.user_home.displayEmploymentDetails
});

export default connect(
    mapStateToProps,
    null
)(DataEntryDialog);
