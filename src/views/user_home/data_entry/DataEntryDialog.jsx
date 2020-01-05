import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import './DataEntryDialog.scss';
import PersonalDetails from "./personal_details/PersonalDetails";

class DataEntryDialog extends Component {
    state = {visible: true, displayPersonalDetails: true};

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

                </Modal>
            </div>
        );
    }
}

export default DataEntryDialog;
