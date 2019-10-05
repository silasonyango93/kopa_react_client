import {
  STORE_USER,
  BEGIN_USER_AUTHENTIFICATION,
  USER_LOGIN_SUCCESS,
  ATTEMPTED_USER_LOGIN_FAILED
} from "./actionTypes";
import { apiPost } from "../../../services/api_connector/ApiConnector";
import {SYSTEM_ADMIN} from "../../../config/constants/Constants";

export function storeUser(displayIncomeFields) {
  return async dispatch => {
    dispatch({
      type: STORE_USER,
      payload: {
        displayIncomeFields
      }
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
                        RoleType: SYSTEM_ADMIN
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