import {
    CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY,
    CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL,
    FETCHING_THE_COMPANYS_PENDING_LOANS_SUCCEEDED,
    LOAN_DETAILS_ADDED_SUCCESSFULLY, RESET_CLIENT_DB_ID,
    TOGGLE_MODAL_DISPLAY
} from "./actionTypes";

export const ACTION_HANDLERS = {
  [CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY]: (state, action) =>
    Object.assign({}, state, {
      displayPersonalDetails: false,
      displayEmploymentDetails: true,
      displayLoanDetails: false,
      currentClientDbRecordId: action.payload.recordId,
      dialogHeight: "380"
    }),
  [CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL]: (state, action) =>
    Object.assign({}, state, {
      displayPersonalDetails: false,
      displayEmploymentDetails: false,
      displayLoanDetails: true,
      currentEmploymentDetails: action.payload.currentEmploymentDetails
    }),
  [FETCHING_THE_COMPANYS_PENDING_LOANS_SUCCEEDED]: (state, action) =>
    Object.assign({}, state, {
      currentCompanyPendingLoans: action.payload.currentCompanyPendingLoans
    }),
  [LOAN_DETAILS_ADDED_SUCCESSFULLY]: (state, action) =>
    Object.assign({}, state, {
        displayPersonalDetails: true,
        displayEmploymentDetails: false,
        displayLoanDetails: false,
        dialogHeight: "630",
        dialogWidth: "600",
    }),

  [TOGGLE_MODAL_DISPLAY]: (state, action) =>
    Object.assign({}, state, {
      visible: action.payload.visible
    }),

    [RESET_CLIENT_DB_ID]: (state, action) =>
        Object.assign({}, state, {
            currentClientDbRecordId: ''
        })
};
