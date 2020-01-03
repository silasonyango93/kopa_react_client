import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import { Columns, Container } from "react-bulma-components";
import './DataEntryDialog.scss';

class DataEntryDialog extends Component {
    state = {visible: true,firstName: ''};

    closeModal = () => {
        this.setState({visible: false});
    };

    openModal = () => {
        this.setState({visible: true});
    };

    render() {
        return (
            <div>
                <Modal visible={this.state.visible} width="600" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="success-modal-header">
                        <p className="modal-title">Data Entry</p>
                    </div>

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
                                            name="companyName"
                                            className="form-control"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            type="text"
                                            onChange={this.handleChange}
                                            autoFocus
                                            required={true}
                                        />
                                    </div>
                                        </Columns.Column>

                                        <Columns.Column size="one-half">
                                    <div className="form-group">
                                        <input
                                            name="companyName"
                                            className="form-control"
                                            placeholder="Middle Name"
                                            value={this.state.firstName}
                                            type="text"
                                            onChange={this.handleChange}
                                            autoFocus
                                            required={true}
                                        />
                                    </div>
                                        </Columns.Column>
                                    </Columns>

                                    <Columns>
                                        <Columns.Column size="one-half">
                                            <div className="form-group">
                                                <input
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={this.state.firstName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                        </Columns.Column>

                                        <Columns.Column size="one-half">
                                            <div className="form-group">
                                                <input
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="Middle Name"
                                                    value={this.state.firstName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                        </Columns.Column>
                                    </Columns>

                                    <Columns>
                                        <Columns.Column size="one-half">
                                            <div className="form-group">
                                                <input
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={this.state.firstName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                        </Columns.Column>

                                        <Columns.Column size="one-half">
                                            <div className="form-group">
                                                <input
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="Middle Name"
                                                    value={this.state.firstName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                        </Columns.Column>
                                    </Columns>

                                    <Columns>
                                        <Columns.Column size="one-half">
                                            <div className="form-group">
                                                <input
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={this.state.firstName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                        </Columns.Column>

                                        <Columns.Column size="one-half">
                                            <div className="form-group">
                                                <input
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="Middle Name"
                                                    value={this.state.firstName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                        </Columns.Column>
                                    </Columns>

                                    <Columns>
                                        <Columns.Column size="one-half">
                                            <div className="form-group">
                                                <input
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={this.state.firstName}
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    required={true}
                                                />
                                            </div>
                                        </Columns.Column>

                                        <Columns.Column size="one-half"></Columns.Column>

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

                </Modal>
            </div>
        );
    }
}

export default DataEntryDialog;
