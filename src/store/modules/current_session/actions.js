import {
  STORE_USER,
  BEGIN_USER_AUTHENTIFICATION,
  USER_LOGIN_SUCCESS,
  TERMINATE_CURRENT_SESSION,
  BEGIN_COMPANY_OWNER_AUTHENTICATION,
  COMPANY_OWNER_AUTHENTICATION_SUCCESSFUL,
  WRONG_LOGIN_CREDENTIALS,
  AN_ERROR_OCCURED_DURING_LOGIN
} from "./actionTypes";
import { apiPost } from "../../../services/api_connector/ApiConnector";
import {
  COMPANY_OWNER,
  SYSTEM_ADMIN
} from "../../../config/constants/Constants";

export function terminateCurrentSession() {
  return async dispatch => {
    dispatch({
      type: TERMINATE_CURRENT_SESSION
    });
  };
}

export function authenticateSystemUser(payload) {
  return async dispatch => {
    dispatch({
      type: BEGIN_USER_AUTHENTIFICATION
    });
    const apiRoute = "/system_admin_login";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (!result.data.error) {
          dispatch({
            type: STORE_USER,
            payload: {
              session_details: result.data,
              RoleType: SYSTEM_ADMIN,
              isSessionActive: true
            }
          });
          dispatch({
            type: USER_LOGIN_SUCCESS
          });
        } else {
          dispatch({
            type: WRONG_LOGIN_CREDENTIALS
          });
        }
      },
      function(err) {
        dispatch({
          type: AN_ERROR_OCCURED_DURING_LOGIN
        });
        console.log(err);
      }
    );
  };
}

export function authenticateSystemAdmin(payload) {
  return async dispatch => {
    dispatch({
      type: BEGIN_USER_AUTHENTIFICATION
    });
    const apiRoute = "/system_admin_login";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (!result.data.error) {
          dispatch({
            type: STORE_USER,
            payload: {
              session_details: result.data,
              RoleType: SYSTEM_ADMIN,
              isSessionActive: true
            }
          });
          dispatch({
            type: USER_LOGIN_SUCCESS
          });
        } else {
          dispatch({
            type: WRONG_LOGIN_CREDENTIALS
          });
        }
      },
      function(err) {
        dispatch({
          type: AN_ERROR_OCCURED_DURING_LOGIN
        });
        console.log(err);
      }
    );
  };
}

export function authenticateCompanyOwner(payload) {
  return async dispatch => {
    dispatch({
      type: BEGIN_COMPANY_OWNER_AUTHENTICATION
    });
    const apiRoute = "/company_owner_login";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        if (!result.data.error) {
          dispatch({
            type: COMPANY_OWNER_AUTHENTICATION_SUCCESSFUL
          });
          dispatch({
            type: STORE_USER,
            payload: {
              session_details: result.data,
              RoleType: COMPANY_OWNER,
              isSessionActive: true
            }
          });
        } else {
          dispatch({
            type: WRONG_LOGIN_CREDENTIALS
          });
        }
      },
      function(err) {
        dispatch({
          type: AN_ERROR_OCCURED_DURING_LOGIN
        });
        console.log(err);
      }
    );
  };
}
