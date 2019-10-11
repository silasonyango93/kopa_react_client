import {
  apiPost
} from "../../../services/api_connector/ApiConnector";
import {
    COMPANY_BRANCH_CREATED_SUCCESSFULLY,
    COMPANY_BRANCH_CREATION_FAILED,
    START_CREATING_A_COMPANY_BRANCH
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
