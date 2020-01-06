import { apiPost } from "../../../services/api_connector/ApiConnector";
import {
  BEGIN_CLIENT_DETAILS_SUBMISSION,
  CLIENT_DETAILS_SUBMISSION_FAILED,
  CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY,
  CLIENT_EMPLOYMENT_DETAILS_UPDATE_FAILED,
  CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL,
  ERROR_WHEN_UPDATING_CLIENT_EMPLOYMENT_DETAILS,
  ERROR_WHILE_SUBMITING_CLIENT_DETAILS,
  START_UPDATING_CLIENT_EMPLOYMENT_DETAILS
} from "./actionTypes";
import {
  START_REGISTERING_A_SYSTEM_USER,
  SYSTEM_USER_REGISTRATION_FAILED,
  SYSTEM_USER_REGISTRATION_SUCCESSFUL
} from "../company_owner_home/actionTypes";

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

export function updateClientEmploymentDetails(payload) {
  return async dispatch => {
    dispatch({
      type: START_UPDATING_CLIENT_EMPLOYMENT_DETAILS
    });
    const apiRoute = "/update_company_clients_employment_details";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results.success) {
          dispatch({
            type: CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL
          });
        } else {
          dispatch({
            type: CLIENT_EMPLOYMENT_DETAILS_UPDATE_FAILED
          });
        }
      },
      function(err) {
        dispatch({
          type: ERROR_WHEN_UPDATING_CLIENT_EMPLOYMENT_DETAILS
        });
        console.log(err);
      }
    );
  };
}
