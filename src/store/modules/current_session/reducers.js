import {TERMINATE_CURRENT_SESSION, STORE_USER} from "./actionTypes";

export const ACTION_HANDLERS = {
  [STORE_USER]: (state, action) =>
    Object.assign({}, state, {
      isLoginSuccessful: true,
      session_details: action.payload.session_details,
        RoleType: action.payload.RoleType,
        isSessionActive: action.payload.isSessionActive,
    }),
    [TERMINATE_CURRENT_SESSION]: state =>
        Object.assign({}, state, {
            isSessionActive: false,
            isLoginSuccessful: false,
        })
};
