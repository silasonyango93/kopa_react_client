import {CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY, CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL} from "./actionTypes";

export const ACTION_HANDLERS = {
    [CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY]: state =>
        Object.assign({}, state, {
            displayPersonalDetails: false,
            displayEmploymentDetails: true,
            displayLoanDetails: false
        }),
    [CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL]: state =>
        Object.assign({}, state, {
            displayPersonalDetails: false,
            displayEmploymentDetails: false,
            displayLoanDetails: true
        })
};
