import React, {Component} from 'react';
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
                        <ClientDetailsView />
                    </div>

                </Modal>
            <div className="recyclercard__main-body" onClick={()=>{this.handleCardClicked();}}>
                <img className="recyclercard__image-div" src="http://backend.kopa.kopa.xyz/web_display_image?imageID=2694b80c7b5150878d7160b08b5a8538"/>
                <div className="recyclercard__text-div">
                    <div className="recyclercard__name-text">Silas Onyango</div>
                    <div className="recyclercard__start-text">2 star</div>
                </div>
            </div>
                <div className="recyclercard__bottom-stroke" />
            </div>
        );
    }
}


export default RecyclerCard;
