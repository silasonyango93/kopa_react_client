import React, {Component} from 'react';
import PropTypes from "prop-types";
import './RecyclerCard.scss';
import Modal from "react-awesome-modal";
import ClientDetailsView from "../../client-details-view/ClientDetailsView";

class RecyclerCard extends Component {

    state = {
        displayCardModal: false
    };

    handleCardClicked = () =>{
        this.setState({displayCardModal: true});
    };

    handleModalCloseIconClicked = () =>{
        this.setState({displayCardModal: false});
    };


    render() {
        return (
            <div>
                <Modal
                    visible={this.state.displayCardModal}
                    width="750"
                    height="550"
                    effect="fadeInUp"
                >
                    <i className="fa fa-close fa-fw recyclercard__close-icon" onClick={()=>{this.handleModalCloseIconClicked();}}/>

                    <div className="recyclercard__modal-content-div">
                        <ClientDetailsView clientDetails={this.props.clientDetails} />
                    </div>

                </Modal>
            <div className="recyclercard__main-body" onClick={()=>{this.handleCardClicked();}}>
                <img className="recyclercard__image-div" src={"http://backend.kopa.kopa.xyz/web_display_image?imageID=" + this.props.imageId}/>
                <div className="recyclercard__text-div">
                    <div className="recyclercard__name-text">{this.props.clientName}</div>
                    <div className="recyclercard__start-text">{this.props.clientPhoneNumber}</div>
                </div>
            </div>
                <div className="recyclercard__bottom-stroke" />
            </div>
        );
    }
}

RecyclerCard.propTypes = {
    clientDetails: PropTypes.shape().isRequired,
    clientName: PropTypes.string.isRequired,
    clientPhoneNumber: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired
};
export default RecyclerCard;
