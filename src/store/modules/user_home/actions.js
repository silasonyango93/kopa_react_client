import { apiPost } from "../../../services/api_connector/ApiConnector";
import {
  BEGIN_ADDING_LOAN_DETAILS,
  BEGIN_CLIENT_DETAILS_SUBMISSION,
  CLIENT_DETAILS_SUBMISSION_FAILED,
  CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY,
  CLIENT_EMPLOYMENT_DETAILS_UPDATE_FAILED,
  CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL,
  ERROR_WHEN_UPDATING_CLIENT_EMPLOYMENT_DETAILS,
  ERROR_WHILE_ADDING_LOAN_DETAILS,
  ERROR_WHILE_SUBMITING_CLIENT_DETAILS,
  FETCHING_THE_COMPANYS_PENDING_LOANS_EMPTY_RESULT_SET,
  FETCHING_THE_COMPANYS_PENDING_LOANS_FAILED,
  FETCHING_THE_COMPANYS_PENDING_LOANS_SUCCEEDED,
  LOAN_DETAILS_ADDED_SUCCESSFULLY,
  LOAN_DETAILS_ADDITION_FAILED,
  RESET_CLIENT_DB_ID,
  RESET_CUSTOMER_ADDED_SUCCESSFULLY,
  START_FETCHING_A_COMPANYS_PENDING_LOANS,
  START_UPDATING_CLIENT_EMPLOYMENT_DETAILS,
  TOGGLE_MODAL_DISPLAY
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
            type: CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY,
            payload: {
              recordId: result.data.results.recordId
            }
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
            type: CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL,
            payload: {
              currentEmploymentDetails: payload
            }
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

export function addLoanDetails(payload) {
  return async dispatch => {
    dispatch({
      type: BEGIN_ADDING_LOAN_DETAILS
    });
    const apiRoute = "/add_loan_application";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results.success) {
          dispatch({
            type: LOAN_DETAILS_ADDED_SUCCESSFULLY
          });
        } else {
          dispatch({
            type: LOAN_DETAILS_ADDITION_FAILED
          });
        }
      },
      function(err) {
        dispatch({
          type: ERROR_WHILE_ADDING_LOAN_DETAILS
        });
        console.log(err);
      }
    );
  };
}

export function resetCustomerAddedSuccessfully() {
  return async dispatch => {
    dispatch({
      type: RESET_CUSTOMER_ADDED_SUCCESSFULLY
    });
  };
}

export function getACompanysPendingLoans(payload) {
  return async dispatch => {
    dispatch({
      type: START_FETCHING_A_COMPANYS_PENDING_LOANS
    });
    const apiRoute = "/get_a_companies_clients_with_pending_loans";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results && result.data.results.length > 0) {
          dispatch({
            type: FETCHING_THE_COMPANYS_PENDING_LOANS_SUCCEEDED,
            payload: {
              currentCompanyPendingLoans: result.data.results
            }
          });
        } else if (result.data.results && result.data.results.length === 0) {
          dispatch({
            type: FETCHING_THE_COMPANYS_PENDING_LOANS_EMPTY_RESULT_SET
          });
        }
      },
      function(err) {
        dispatch({
          type: FETCHING_THE_COMPANYS_PENDING_LOANS_FAILED
        });
        console.log(err);
      }
    );
  };
}

export function toggleModalDisplay(displayModal) {
  return async dispatch => {
    dispatch({
      type: TOGGLE_MODAL_DISPLAY,
      payload: {
        visible: displayModal
      }
    });
  };
}

export function resetClientDbId() {
  return async dispatch => {
    dispatch({
      type: RESET_CLIENT_DB_ID
    });
  };
}

export function registerCustomerAdmission(payload) {
  return async dispatch => {
    const apiRoute = "/add_customer_registration";
    apiPost(payload, apiRoute);
  };
}
