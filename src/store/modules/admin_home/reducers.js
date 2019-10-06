import { SUBMIT_COMPANY_REGISTRATION_FORM } from "./actionTypes";

export const ACTION_HANDLERS = {
  [SUBMIT_COMPANY_REGISTRATION_FORM]: (state, action) =>
    Object.assign({}, state, {
      isDataSubmissionSuccessful: true,
      data: action.payload.results
    })
};
