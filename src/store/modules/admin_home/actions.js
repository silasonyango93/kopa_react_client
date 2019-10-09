import { apiPost } from "../../../services/api_connector/ApiConnector";
import {
  COMPANY_OWNER_REGISTRATION_FAILED,
  COMPANY_OWNER_REGISTRATION_SUCCESSFUL,
  COMPANY_REGISTRATION_FORM_SUBMISSION_FAILED,
  COMPANY_REGISTRATION_FORM_SUBMISSION_SUCCESSFUL,
  OWNERSHIP_GROUP_CREATED,
  OWNERSHIP_GROUP_CREATION_FAILED,
  START_COMPANY_OWNER_REGISTRATION,
  START_COMPANY_REGISTRATION_FORM_SUBMISSION,
  START_OWNERSHIP_GROUP_CREATION
} from "./actionTypes";

export function createOwnershipGroup(payload) {
  return async dispatch => {
    dispatch({
      type: START_OWNERSHIP_GROUP_CREATION
    });
    const apiRoute = "/add_company_ownership_groups";
    const data = { OwnershipGroupName: payload.CompanyName };
    const returnedPromise = apiPost(data, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results.success) {
          dispatch({
            type: OWNERSHIP_GROUP_CREATED
          });

          const formData = {
            CompanyOwnershipGroupId: result.data.results.recordId,
            CompanyName: payload.CompanyName
          };

          submitCompanyRegistrationForm(formData, dispatch);
        } else {
          dispatch({
            type: OWNERSHIP_GROUP_CREATION_FAILED
          });
        }
      },
      function(err) {
        dispatch({
          type: OWNERSHIP_GROUP_CREATION_FAILED
        });
        console.log(err);
      }
    );
  };
}

export function submitCompanyRegistrationForm(payload, dispatch) {
  dispatch({
    type: START_COMPANY_REGISTRATION_FORM_SUBMISSION
  });
  const apiRoute = "/add_companies";
  const returnedPromise = apiPost(payload, apiRoute);
  returnedPromise.then(
    function(result) {
      if (result.data.results.success) {
        dispatch({
          type: COMPANY_REGISTRATION_FORM_SUBMISSION_SUCCESSFUL
        });
      }
    },
    function(err) {
      dispatch({
        type: COMPANY_REGISTRATION_FORM_SUBMISSION_FAILED
      });
      console.log(err);
    }
  );
}

export function registerCompanyOwner(payload) {
  return async dispatch => {
    dispatch({
      type: START_COMPANY_OWNER_REGISTRATION
    });
    const apiRoute = "/company_owner_registration";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (result.data.results.success) {
          dispatch({
            type: COMPANY_OWNER_REGISTRATION_SUCCESSFUL
          });
        } else {
          dispatch({
            type: COMPANY_OWNER_REGISTRATION_FAILED
          });
        }
      },
      function(err) {
        dispatch({
          type: COMPANY_OWNER_REGISTRATION_FAILED
        });
        console.log(err);
      }
    );
  };
}
