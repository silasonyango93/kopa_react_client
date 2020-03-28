import React, {Component} from 'react';
import PropTypes from "prop-types";

import './ClientDetailsView.scss';
import Table from "../table/table_body/Table";
import RecyclerCard from "../recyclerview/recycler-card/RecyclerCard";

class ClientDetailsView extends Component {
    render() {

        const {
            clientDetails
        } = this.props;

        return (
            <div className="details__main-body">

                <div className="details__profile-card">
                    <img className="details__profpic-div" src={"http://backend.kopa.kopa.xyz/web_display_image?imageID=" + clientDetails.ClientProfilePicName}/>
                    <div className="details__details-div">
                        <p className="details__profile-title">Client Profile</p>
                        <div className="details__first-row">
                            <div className="details__name-column">
                                <div>{clientDetails.ClientFirstName + ' '+clientDetails.ClientSurname}</div>
                                <div className="details__name-stroke"/>
                            </div>
                            <div className="details__number-column">
                                <div>{clientDetails.ClientPhoneNumber}</div>
                                <div className="details__name-stroke"/>
                            </div>
                        </div>

                        <div className="details__email-div">{clientDetails.ClientDOB.substring(0,10) + ' (DOB)'}</div>
                        <div className="details__name-stroke"/>

                        <div className="details__dob-div">{clientDetails.ClientEmail}</div>
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
                            <div className="details__career-pill">{clientDetails.Occupation}</div>
                        </div>

                        <div className="details__employment-first-row">
                            <div className="details__career-title">Station</div>
                            <div className="details__career-pill">{clientDetails.EmploymentStation}</div>
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

ClientDetailsView.propTypes = {
    clientDetails: PropTypes.shape().isRequired
};
export default ClientDetailsView;
