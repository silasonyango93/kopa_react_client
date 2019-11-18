import {TERMINATE_CURRENT_SESSION, STORE_USER, SYSTEM_NOT_CONFIGURED} from "./actionTypes";

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
        }),
    [SYSTEM_NOT_CONFIGURED]: (state, action) =>
        Object.assign({}, state, {
            isCompanyAlreadyConfigured: action.payload.isCompanyAlreadyConfigured,
            initialConfigurations: { genderConfiguration: false}
        })
};
