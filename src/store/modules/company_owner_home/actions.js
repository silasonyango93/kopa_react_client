import { apiPost } from "../../../services/api_connector/ApiConnector";
import {
  COMPANY_BRANCH_CREATED_SUCCESSFULLY,
  COMPANY_BRANCH_CREATION_FAILED,
  EMPLOYMENT_CATEGORIES_REGISTRATION_FAILED,
  EMPLOYMENT_CATEGORIES_REGISTRATION_SUCCESSFUL,
  FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_EMPTY_RESULT_SET,
  FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_FAILED,
  FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED,
  FETCHING_THE_COMPANYS_BRANCHES_EMPTY_RESULT_SET,
  FETCHING_THE_COMPANYS_BRANCHES_FAILED,
  FETCHING_THE_COMPANYS_BRANCHES_SUCCEEDED,
  START_CREATING_A_COMPANY_BRANCH,
  START_FETCHING_A_COMPANY_OWNERS_COMPANY_DETAILS,
  START_FETCHING_A_COMPANYS_BRANCHES,
  START_REGISTERING_A_SYSTEM_USER,
  START_REGISTERING_EMPLOYMENT_CATEGORIES,
  SYSTEM_USER_REGISTRATION_FAILED,
  SYSTEM_USER_REGISTRATION_SUCCESSFUL
} from "./actionTypes";

export function createCompanyBranch(payload) {
  return async dispatch => {
    dispatch({
      type: START_CREATING_A_COMPANY_BRANCH
    });
    const apiRoute = "/add_company_branches";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results.success) {
          dispatch({
            type: COMPANY_BRANCH_CREATED_SUCCESSFULLY
          });
        } else {
          dispatch({
            type: COMPANY_BRANCH_CREATION_FAILED
          });
        }
      },
      function(err) {
        dispatch({
          type: COMPANY_BRANCH_CREATION_FAILED
        });
        console.log(err);
      }
    );
  };
}


export function registerAnEmploymentCategory(payload) {
  return async dispatch => {
    dispatch({
      type: START_REGISTERING_EMPLOYMENT_CATEGORIES
    });
    const apiRoute = "/add_employment_categories";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
        function(result) {
          if (result.data.results.success) {
            dispatch({
              type: EMPLOYMENT_CATEGORIES_REGISTRATION_SUCCESSFUL
            });
          } else {
            dispatch({
              type: EMPLOYMENT_CATEGORIES_REGISTRATION_FAILED
            });
          }
        },
        function(err) {
          dispatch({
            type: EMPLOYMENT_CATEGORIES_REGISTRATION_FAILED
          });
          console.log(err);
        }
    );
  };
}

export function getCompanyOwnersCompanyDetails(payload) {
  return async dispatch => {
    dispatch({
      type: START_FETCHING_A_COMPANY_OWNERS_COMPANY_DETAILS
    });
    const apiRoute = "/get_company_owner_company_details";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results && result.data.results.length > 0) {
          dispatch({
            type: FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED,
            payload: {
              companyOwnersCompanyDetails: result.data.results[0]
            }
          });
        } else if (result.data.results && result.data.results.length === 0) {
          dispatch({
            type: FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_EMPTY_RESULT_SET
          });
        }
      },
      function(err) {
        dispatch({
          type: FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_FAILED
        });
        console.log(err);
      }
    );
  };
}

export function getACompanysBranches(payload) {
  return async dispatch => {
    dispatch({
      type: START_FETCHING_A_COMPANYS_BRANCHES
    });
    const apiRoute = "/get_specific_company_branches";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results && result.data.results.length > 0) {
          dispatch({
            type: FETCHING_THE_COMPANYS_BRANCHES_SUCCEEDED,
            payload: {
              myCompanyBranches: result.data.results
            }
          });
        } else if (result.data.results && result.data.results.length === 0) {
          dispatch({
            type: FETCHING_THE_COMPANYS_BRANCHES_EMPTY_RESULT_SET
          });
        }
      },
      function(err) {
        dispatch({
          type: FETCHING_THE_COMPANYS_BRANCHES_FAILED
        });
        console.log(err);
      }
    );
  };
}

export function registerASystemUser(payload) {
  return async dispatch => {
    dispatch({
      type: START_REGISTERING_A_SYSTEM_USER
    });
    const apiRoute = "/system_user_registration";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results.success) {
          dispatch({
            type: SYSTEM_USER_REGISTRATION_SUCCESSFUL
          });
        } else {
          dispatch({
            type: SYSTEM_USER_REGISTRATION_FAILED
          });
        }
      },
      function(err) {
        dispatch({
          type: SYSTEM_USER_REGISTRATION_FAILED
        });
        console.log(err);
      }
    );
  };
}
