import React, {Component} from 'react';
import './ClientDetailsView.scss';
import Table from "../table/table_body/Table";

class ClientDetailsView extends Component {
    render() {
        return (
            <div className="details__main-body">

                <div className="details__profile-card">
                    <img className="details__profpic-div" src="http://backend.kopa.kopa.xyz/web_display_image?imageID=2694b80c7b5150878d7160b08b5a8538"/>
                    <div className="details__details-div">
                        <p className="details__profile-title">Client Profile</p>
                        <div className="details__first-row">
                            <div className="details__name-column">
                                <div>Silas Onyango</div>
                                <div className="details__name-stroke"/>
                            </div>
                            <div className="details__number-column">
                                <div>0707902812</div>
                                <div className="details__name-stroke"/>
                            </div>
                        </div>

                        <div className="details__email-div">silas.onyango93@gmail.com</div>
                        <div className="details__name-stroke"/>

                        <div className="details__belly-div">
                            <div className="details__belly"></div>
                        </div>


                    </div>

                </div>

                <div className="details__more-details-div">
                    <div className="details__employment-details-card">
                        <div className="details__employment-title">Employment Details</div>
                        <div className="details__name-stroke"/>

                        <div className="details__employment-first-row details__top-row">
                            <div className="details__career-title">Career</div>
                            <div className="details__career-pill">Software Developer</div>
                        </div>

                        <div className="details__employment-first-row">
                            <div className="details__career-title">Station</div>
                            <div className="details__career-pill">Nairobi</div>
                        </div>
                    </div>

                    <div className="details__table-card">
                        <Table />
                    </div>

                </div>
                
            </div>
        );
    }
}

export default ClientDetailsView;
