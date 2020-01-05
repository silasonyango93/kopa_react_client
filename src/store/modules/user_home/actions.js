
import {apiPost} from "../../../services/api_connector/ApiConnector";
import {
    BEGIN_CLIENT_DETAILS_SUBMISSION,
    CLIENT_DETAILS_SUBMISSION_FAILED,
    CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY, ERROR_WHILE_SUBMITING_CLIENT_DETAILS
} from "./actionTypes";

export function submitClientDetails(payload) {
    return async dispatch => {
        dispatch({
            type: BEGIN_CLIENT_DETAILS_SUBMISSION
        });
        const apiRoute = "/add_company_clients";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY
                    });
                } else {
                    dispatch({
                        type: CLIENT_DETAILS_SUBMISSION_FAILED
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_WHILE_SUBMITING_CLIENT_DETAILS
                });
                console.log(err);
            }
        );
    };
}
