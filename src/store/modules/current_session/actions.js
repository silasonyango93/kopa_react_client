import {
  STORE_USER,
  BEGIN_USER_AUTHENTIFICATION,
  USER_LOGIN_SUCCESS,
  ATTEMPTED_USER_LOGIN_FAILED,
  TERMINATE_CURRENT_SESSION,
  BEGIN_COMPANY_OWNER_AUTHENTICATION,
  COMPANY_OWNER_AUTHENTICATION_SUCCESSFUL,
  COMPANY_OWNER_AUTHENTICATION_FAILED
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

export function authenticateUser(payload) {
  return async dispatch => {
    dispatch({
      type: BEGIN_USER_AUTHENTIFICATION
    });
    const apiRoute = "/user_login";
    const returnedPromise = apiPost(payload, apiRoute);
    returnedPromise.then(
      function(result) {
        dispatch({
          type: STORE_USER,
          payload: {
            session_details: result.data
          }
        });
        dispatch({
          type: USER_LOGIN_SUCCESS
        });
      },
      function(err) {
        dispatch({
          type: ATTEMPTED_USER_LOGIN_FAILED
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
      },
      function(err) {
        dispatch({
          type: ATTEMPTED_USER_LOGIN_FAILED
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
      },
      function(err) {
        dispatch({
          type: COMPANY_OWNER_AUTHENTICATION_FAILED
        });
        console.log(err);
      }
    );
  };
}
