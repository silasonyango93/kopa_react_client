import {
  apiPost
} from "../../../services/api_connector/ApiConnector";
import {
    COMPANY_BRANCH_CREATED_SUCCESSFULLY,
    COMPANY_BRANCH_CREATION_FAILED,
    FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_FAILED,
    FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED,
    FETCHING_THE_COMPANYS_BRANCHES_FAILED,
    FETCHING_THE_COMPANYS_BRANCHES_SUCCEEDED,
    START_CREATING_A_COMPANY_BRANCH,
    START_FETCHING_A_COMPANY_OWNERS_COMPANY_DETAILS,
    START_FETCHING_A_COMPANYS_BRANCHES
} from "./actionTypes";
import {STORE_USER} from "../current_session/actionTypes";
import {COMPANY_OWNER} from "../../../config/constants/Constants";



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



export function getCompanyOwnersCompanyDetails(payload) {
    return async dispatch => {
        dispatch({
            type: START_FETCHING_A_COMPANY_OWNERS_COMPANY_DETAILS
        });
        const apiRoute = "/get_company_owner_company_details";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results) {
                    dispatch({
                        type: FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED,
                        payload: {
                            companyOwnersCompanyDetails: result.data.results[0]
                        }

                    });
                } else {
                    dispatch({
                        type: FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_FAILED
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
        const apiRoute = "/get_company_owner_company_details";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results) {
                    dispatch({
                        type: FETCHING_THE_COMPANYS_BRANCHES_SUCCEEDED
                    });
                } else {
                    dispatch({
                        type: FETCHING_THE_COMPANYS_BRANCHES_FAILED
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
